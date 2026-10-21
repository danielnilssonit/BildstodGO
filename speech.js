// Only generated audio is served to the browser. There is no API key here.
let catalog=null;
const ready=fetch('./audio-index.json').then(r=>r.ok?r.json():null).then(data=>{catalog=data;return data;}).catch(()=>null);
export const normalizeSpeech=text=>String(text).trim().replace(/\s+/g,' ').replace(/[.!?]+$/g,'').toLocaleLowerCase('sv');
const player=new Audio();
player.preload='auto';
player.setAttribute('aria-hidden','true');
player.id='recorded-speech';
document.body.append(player);
let generation=0,finishCurrent=null;
export function stopRecorded(){generation++;player.pause();player.removeAttribute('src');player.load();if(finishCurrent){finishCurrent(false);finishCurrent=null;}player.dataset.state='stopped';}
export function chooseRecordings(text,clips){
  const key=normalizeSpeech(text);if(clips[key])return [clips[key]];
  const tokens=key.split(' ');if(tokens.length>500)return null;
  const paths=Array(tokens.length+1).fill(null);paths[tokens.length]=[];
  for(let i=tokens.length-1;i>=0;i--)for(let j=Math.min(tokens.length,i+35);j>i;j--){const file=clips[normalizeSpeech(tokens.slice(i,j).join(' '))];if(file&&paths[j]&&(!paths[i]||paths[j].length+1<paths[i].length))paths[i]=[file,...paths[j]];}
  return paths[0];
}
export function recordedVoice(){return catalog?.voice?.name||'Peter';}
export async function playRecorded(text,{rate=1,fallback=()=>{}}={}){
  stopRecorded();const ownGeneration=generation;const data=await ready;
  if(ownGeneration!==generation)return;
  const queue=data?.clips?chooseRecordings(text,data.clips):null;
  if(!queue?.length){fallback();return;}
  player.playbackRate=Math.max(.65,Math.min(1.2,Number(rate)||1));
  player.preservesPitch=true;
  player.dataset.engine='ElevenLabs V4';
  player.dataset.voice=data.voice?.name||'Peter';
  player.dataset.text=text;
  for(const file of queue){
    if(ownGeneration!==generation)return;
    if(!/^audio\/[a-f0-9]+\.mp3$/.test(file)){fallback();return;}
    const played=await new Promise(resolve=>{let settled=false;const finish=ok=>{if(settled)return;settled=true;clearTimeout(timeout);player.onended=null;player.onerror=null;finishCurrent=null;resolve(ok);};const timeout=setTimeout(()=>finish(false),120000);finishCurrent=finish;player.onended=()=>finish(true);player.onerror=()=>finish(false);player.src=file;player.dataset.state='playing';player.play().catch(()=>finish(false));});
    if(ownGeneration!==generation)return;
    if(!played){player.pause();player.removeAttribute('src');player.load();player.dataset.state='fallback';fallback();return;}
  }
  if(ownGeneration===generation)player.dataset.state='finished';
}
