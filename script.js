const audio = document.getElementById("player");
const genreSelect = document.getElementById("genreSelect");
const stationSelect = document.getElementById("stationSelect");
const playBtn = document.getElementById("playBtn");
const muteBtn = document.getElementById("muteBtn");
const stopBtn = document.getElementById("stopBtn");
const volumeControl = document.getElementById("volumeControl");
const signalFill = document.getElementById("signalFill");

let currentURL = "";
let isMuted = false;

const stations = {
  slow: [
    { name:"Radio MUSIK KITA", url:"https://stream.zeno.fm/wvq442iwm6ztv" },
    { name:"Radio DISCO Mettaswara", url:"https://mettaswara.com:8700/disco" },
    { name:"Radio ISWARA", url:"https://n06.radiojar.com/4ywdgup3bnzuv" }
  ],
  dangdut: [
    { name:"Radio Mettaswara Dangdut", url:"https://mettaswara.com:8700/mix" },
    { name:"Radio Campur Sari FM", url:"https://streaming.campursarifm.com/listen/campursari/campursari892" },
    { name:"Radio DFM Dangdut", url:"https://i.klikhost.com/9000/stream" }
  ],
  barat: [
    { name:"Romantic FM", url:"https://romantic.streeemer.com/listen/romantic/radio.mp3" },
    { name:"Hits Love Radio", url:"https://radio2.vip-radios.fm:18012/stream-128kmp3-HitsLove" },
    { name:"Love Radio Italia", url:"https://loveradio.streamingmedia.it/play" }
  ],
  rohani: [
    { name:"Radio Gracia Rohani", url:"https://pu.klikhost.com/proxy/gracia/stream" },
    { name:"SRFM Rohani", url:"https://pu.klikhost.com/proxy/srfm/stream" },
    { name:"Rohani FM", url:"https://i.klikhost.com/8164/stream" }
  ]
};

genreSelect.onchange = () => {
  stationSelect.innerHTML = '<option value="">📡 Pilih Stasiun</option>';
  stations[genreSelect.value]?.forEach(s=>{
    const opt=document.createElement("option");
    opt.value=s.url;
    opt.textContent=s.name;
    stationSelect.appendChild(opt);
  });
};

stationSelect.onchange = () => currentURL = stationSelect.value;

playBtn.onclick = () => {
  if(!currentURL) return alert("Pilih stasiun dulu sahabat 😄");
  audio.src = currentURL;
  audio.play();
};

muteBtn.onclick = () => {
  isMuted=!isMuted;
  audio.muted=isMuted;
  muteBtn.textContent=isMuted?"🔊 UNMUTE":"🔇 MUTE";
};

stopBtn.onclick = () => {
  audio.pause();
  audio.src="";
};

volumeControl.value=1;
volumeControl.oninput=()=> audio.volume=volumeControl.value;

setInterval(()=>{
  signalFill.style.width = audio.paused ? "0%" : (Math.random()*100)+"%";
},80);
