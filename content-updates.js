import { DEFAULT_BOARDS } from './data.js?v=13';

export const CONTENT_REVISION = 4;
const copy = value => JSON.parse(JSON.stringify(value));
const removed = new Set(['ja-nej','kommunikation-b','min-saga','idag','djur-och-ljud','skriva-mail','schema-dv','personer']);
const aliases = {'ja-nej':'kommunikation-a','kommunikation-b':'kommunikation-a',personer:'ord-personer'};

// Run once for existing devices. Stable cell IDs retain edits and custom pictures.
function updateFirstRevision(state) {
  if (state.contentRevision >= 1) return state;
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
  result.contentRevision = 1;
  return result;
}

function updateSecondRevision(state) {
  if (state.contentRevision >= 2) return state;
  const result = copy(updateFirstRevision(state));
  const seed = id => DEFAULT_BOARDS.find(board => board.id === id);
  const norm = label => label.trim().toLocaleLowerCase('sv').replace(/[.!?]+$/,'');
  const deletedBoards = new Set(['arbeta-dv','taxiresa','fika']);
  result.boards = result.boards.filter(board => !deletedBoards.has(board.id));
  const get = id => result.boards.find(board => board.id === id);
  const removeCards = (board, labels) => {
    const unwanted = new Set(labels.map(norm));
    if (board) board.cells = board.cells.filter(cell => !cell || !unwanted.has(norm(cell.label)));
  };
  const addCards = (board, ids) => {
    if (!board) return;
    for (const cell of seed(board.id).cells.filter(cell => ids.includes(cell.id))) {
      if (!board.cells.some(existing => existing && (existing.id === cell.id || norm(existing.label) === norm(cell.label)))) board.cells.push(copy(cell));
    }
  };
  const resize = (board, minimumRows) => {
    if (board) board.rows = Math.min(6,Math.max(minimumRows,Math.ceil(board.cells.length/board.columns)));
  };
  const replaceSymbol = (board, label, oldSymbols, newSymbol) => {
    if (!board) return;
    for (const cell of board.cells) if (cell && norm(cell.label) === norm(label) && !cell.image && oldSymbols.includes(cell.symbol)) cell.symbol = newSymbol;
  };
  const communication = get('kommunikation-a');
  removeCards(communication,['Jag är hungrig','Jag är törstig','Toalett','Tack','Hej','Jag vill vila','En gång till']);
  if (communication) for (const cell of communication.cells) {
    if (cell && norm(cell.label) === 'semester') Object.assign(cell,{label:'Ledig',speech:'Ledig',symbol:'free',image:null});
  }
  addCards(communication,['communication-wait','communication-listen']);
  resize(communication,4);

  const feelings = get('ord-kanslor');
  if (feelings) {
    for (const standard of seed('ord-kanslor').cells) replaceSymbol(feelings,standard.label,[standard.symbol.replace(/^emotion-/,''),standard.symbol],standard.symbol);
    if (!feelings.image) feelings.symbol = 'emotion-happy';
  }
  const questions = get('ord-fragor');
  removeCards(questions,['Får jag vara med']);
  for (const [label,oldSymbol] of [['Hur','how'],['Vad','what'],['Varför','why']]) replaceSymbol(questions,label,[oldSymbol],'question-mark');

  const people = get('ord-personer');
  const visualSupport = people?.cells.find(cell => cell && norm(cell.label) === 'bildstöd');
  removeCards(people,['en kvinna','en man','ett barn','Bildstöd varor','Bildstöd','Telefon','Ipad']);
  replaceSymbol(people,'Mamma',['mother'],'mother-alone');
  replaceSymbol(people,'Pappa',['father'],'father-alone');
  replaceSymbol(people,'Du',['wave'],'you');
  if (people) for (const cell of people.cells) if (cell?.id === 'people-you' && norm(cell.label) === 'du') {cell.label='Du';cell.speech='Du';}
  resize(people,3);

  const daily = get('ord-vardag');
  removeCards(daily,['Plast']);
  if (daily && visualSupport && !daily.cells.some(cell => cell && norm(cell.label) === 'bildstöd')) {
    const moved = copy(visualSupport);
    let suffix = 0;
    moved.id = 'ord-vardag-visual-support';
    while (daily.cells.some(cell => cell?.id === moved.id)) moved.id = 'ord-vardag-visual-support-'+(++suffix);
    daily.cells.push(moved);
  }
  addCards(daily,['ord-vardag-visual-support']);
  const places = get('ord-platser');
  replaceSymbol(places,'Taxi',['car'],'taxi');
  addCards(places,['ord-platser-gympa','ord-platser-dv','ord-platser-car','ord-platser-restaurant']);
  resize(places,5);
  if (!get('bokstaver')) result.boards.push(copy(seed('bokstaver')));
  for (const board of result.boards) for (const cell of board.cells) if (cell?.target && deletedBoards.has(cell.target)) delete cell.target;
  result.contentRevision = 2;
  return result;
}

// Correct the standard label once without changing personal pictures or text.
function updateThirdRevision(state) {
  if (state.contentRevision >= 3) return state;
  const result = copy(updateSecondRevision(state));
  const feelings = result.boards.find(board => board.id === 'ord-kanslor');
  for (const cell of feelings?.cells || []) {
    if (!cell || cell.id !== 'ord-kanslor-idea') continue;
    const standardLabel = ['ide','idé'].includes(cell.label.trim().toLocaleLowerCase('sv'));
    if (cell.label.trim().toLocaleLowerCase('sv') === 'ide') cell.label = 'Idé';
    if (standardLabel && cell.speech?.trim().toLocaleLowerCase('sv') === 'ide') cell.speech = 'Idé';
    if (!cell.image && ['idea','emotion-idea'].includes(cell.symbol) && cell.label === 'Idé') cell.symbol = 'emotion-idea';
  }
  result.contentRevision = 3;
  return result;
}

export function updateContent(state) {
  if (state.contentRevision >= CONTENT_REVISION) return state;
  const result = copy(updateThirdRevision(state));
  const communication = result.boards.find(board => board.id === 'kommunikation-a');
  if (communication) {
    const additions = DEFAULT_BOARDS.find(board => board.id === 'kommunikation-a').cells.filter(cell => ['communication-sorry','communication-correct','communication-wrong'].includes(cell.id));
    for (const standard of additions) {
      if (communication.cells.some(cell => cell?.label.trim().toLocaleLowerCase('sv') === standard.label.toLocaleLowerCase('sv'))) continue;
      const cell = copy(standard);
      let suffix = 0;
      while (communication.cells.some(existing => existing?.id === cell.id)) cell.id = standard.id + '-' + (++suffix);
      communication.cells.push(cell);
    }
    communication.rows = Math.min(6,Math.max(communication.rows,Math.ceil(communication.cells.length/communication.columns)));
  }
  for (const [id,oldSymbol,newSymbol] of [['ord-halsa','doctor','health-body'],['ord-personer','visual-support','people-support']]) {
    const board = result.boards.find(board => board.id === id);
    if (board && !board.image && board.symbol === oldSymbol) board.symbol = newSymbol;
  }
  result.contentRevision = CONTENT_REVISION;
  return result;
}
