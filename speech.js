// Only generated audio is served to the browser. There is no API key here.
let catalog=null;
const ready=fetch('./audio-index.json?v=12').then(r=>r.ok?r.json():null).then(data=>{catalog=data;return data;}).catch(()=>null);
export const normalizeSpeech=text=>String(text).trim().replace(/\s+/g,' ').replace(/[.!?]+$/g,'').toLocaleLowerCase('sv');
const player=new Audio();
player.preload='auto';
player.setAttribute('aria-hidden','true');
player.setAttribute('playsinline','');
player.id='recorded-speech';
document.body.append(player);
const IDLE_STARTUP_MS=10000;
let generation=0,finishCurrent=null,startupRequired=true,lastPlaybackAt=-Infinity;
export function stopRecorded(){
  generation++;player.pause();
  if(finishCurrent)finishCurrent(false);
  // Retain the source and element instead of tearing down the phone's media
  // pipeline with removeAttribute('src') and load() between every tap.
  player.dataset.state='stopped';
}
document.addEventListener('visibilitychange',()=>{
  startupRequired=true;
  if(document.hidden)stopRecorded();
});
window.addEventListener('pagehide',()=>{startupRequired=true;stopRecorded();});
window.addEventListener('pageshow',()=>{startupRequired=true;});
export function chooseRecordings(text,clips){
  const key=normalizeSpeech(text);if(clips[key])return [clips[key]];
  const tokens=key.split(' ');if(tokens.length>500)return null;
  const paths=Array(tokens.length+1).fill(null);paths[tokens.length]=[];
  for(let i=tokens.length-1;i>=0;i--)for(let j=Math.min(tokens.length,i+35);j>i;j--){const file=clips[normalizeSpeech(tokens.slice(i,j).join(' '))];if(file&&paths[j]&&(!paths[i]||paths[j].length+1<paths[i].length))paths[i]=[file,...paths[j]];}
  return paths[0];
}
export function recordedVoice(){return catalog?.voice?.name||'Peter';}
export async function playRecorded(text,{rate=1,fallback=()=>{}}={}){
  stopRecorded();const ownGeneration=generation;
  // When loaded, keep play() in the user's click handler for mobile autoplay.
  const data=catalog||await ready;
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
    const cold=startupRequired||Date.now()-lastPlaybackAt>=IDLE_STARTUP_MS;
    const startupFile=data.startupClips?.[file];
    const padded=cold&&/^audio\/[a-f0-9]+\.mp3$/.test(startupFile||'');
    const source=padded?startupFile:file;
    const leadSeconds=Math.max(.3,Number(data.startupPaddingMs)/1000||.3);
    if(padded)startupRequired=true;
    player.dataset.startup=padded?'true':'false';
    player.dataset.sourceClip=file;
    const played=await new Promise(resolve=>{
      let settled=false,started=false;
      const rememberProgress=()=>{
        if(!started||ownGeneration!==generation)return;
        lastPlaybackAt=Date.now();
        // Resolving play() alone does not warm the speaker: a quick second tap
        // may cancel the first clip while its silent lead-in is still playing.
        if(!padded||player.currentTime>=leadSeconds){
          startupRequired=false;player.dataset.state='playing';
        }
      };
      const finish=ok=>{
        if(settled)return;
        rememberProgress();settled=true;clearTimeout(timeout);
        player.onended=null;player.onerror=null;player.ontimeupdate=null;
        if(finishCurrent===finish)finishCurrent=null;
        if(ok){lastPlaybackAt=Date.now();startupRequired=false;}
        resolve(ok);
      };
      const timeout=setTimeout(()=>finish(false),120000);
      finishCurrent=finish;
      player.onended=()=>finish(true);player.onerror=()=>finish(false);
      player.ontimeupdate=rememberProgress;
      player.src=source;player.dataset.state=padded?'starting':'playing';
      try{
        Promise.resolve(player.play()).then(()=>{
          if(settled||ownGeneration!==generation)return;
          started=true;rememberProgress();
        }).catch(()=>finish(false));
      }catch{finish(false);}
    });
    if(ownGeneration!==generation)return;
    if(!played){player.pause();startupRequired=true;player.dataset.state='fallback';fallback();return;}
  }
  if(ownGeneration===generation)player.dataset.state='finished';
}
