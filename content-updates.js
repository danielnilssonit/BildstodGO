import { DEFAULT_BOARDS } from './data.js?v=9';

export const CONTENT_REVISION = 1;
const copy = value => JSON.parse(JSON.stringify(value));
const removed = new Set(['ja-nej','kommunikation-b','min-saga','idag','djur-och-ljud','skriva-mail','schema-dv','personer']);
const aliases = {'ja-nej':'kommunikation-a','kommunikation-b':'kommunikation-a',personer:'ord-personer'};

// Run once for existing devices. Stable cell IDs retain edits and custom pictures.
export function updateContent(state) {
  if (state.contentRevision >= CONTENT_REVISION) return state;
  const result = copy(state);
  const byId = new Map(result.boards.map(board => [board.id, board]));
  const seed = id => copy(DEFAULT_BOARDS.find(board => board.id === id));
  const combine = groups => {
    const cells = [], used = new Set();
    for (const [source, group] of groups) for (const original of group) {
      if (!original) continue;
      const cell = copy(original);
      if (used.has(cell.id)) {
        // IDs were only unique within each old board; keep distinct custom cards.
        if (cells.some(previous => JSON.stringify(previous) === JSON.stringify(cell))) continue;
        const base = `${source}-${cell.id}`.slice(0, 90);
        let suffix = 1;
        cell.id = base;
        while (used.has(cell.id)) cell.id = `${base}-${suffix++}`;
      }
      used.add(cell.id);
      cells.push(cell);
    }
    return cells;
  };
  const append = (cells, additions) => {
    for (const cell of additions) if (!cells.some(existing => existing.id === cell.id)) cells.push(cell);
    return cells;
  };
  const communicationSeed = seed('kommunikation-a');
  const communication = byId.get('kommunikation-a') || communicationSeed;
  const yesNo = byId.get('ja-nej')?.cells || [];
  communication.cells = combine([
    ['yes-no', yesNo.filter(cell => cell && !cell.target)],
    ['a', communication.cells.filter(cell => cell && !cell.target)],
    ['b', (byId.get('kommunikation-b')?.cells || []).filter(cell => cell && !cell.target)]
  ]);
  append(communication.cells, communicationSeed.cells.filter(cell => ['yn-yes','yn-no','communication-helg','communication-semester'].includes(cell.id)));
  for (const cell of communication.cells) {
    if (cell.id === 'yn-yes' && cell.label === 'ja') cell.label = 'Ja';
    if (cell.id === 'yn-no' && cell.label === 'nej') cell.label = 'Nej';
  }
  Object.assign(communication, {title:'Kommunikation',showOnHome:true,archived:false,messageBar:true,columns:4,rows:Math.min(6,Math.max(5,Math.ceil(communication.cells.length/4)))});

  const peopleSeed = seed('ord-personer');
  const people = byId.get('ord-personer') || peopleSeed;
  people.cells = combine([
    ['support', people.cells],
    ['people', byId.get('personer')?.cells || []]
  ]);
  append(people.cells, peopleSeed.cells.filter(cell => ['people-chef-boende','people-chef-dv','people-god-man'].includes(cell.id)));
  Object.assign(people, {title:'Personer',showOnHome:true,archived:false,columns:4,rows:Math.min(6,Math.max(5,Math.ceil(people.cells.length/4)))});

  result.boards = result.boards.filter(board => !removed.has(board.id)).map(board => board.id === communication.id ? communication : board.id === people.id ? people : board);
  if (!result.boards.some(board => board.id === communication.id)) result.boards.unshift(communication);
  if (!result.boards.some(board => board.id === people.id)) result.boards.push(people);
  for (const board of result.boards) for (const cell of board.cells) {
    if (!cell?.target) continue;
    if (aliases[cell.target]) cell.target = aliases[cell.target];
    else if (removed.has(cell.target)) delete cell.target;
  }
  result.contentRevision = CONTENT_REVISION;
  return result;
}
