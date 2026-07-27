let currentMusic = 0;

const music = document.querySelector('#audio');
const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.forward-btn');
const backwardBtn = document.querySelector('.backward-btn');

// --- SETUP SPECTRUM VISUALIZER ---
const canvas = document.getElementById('spectrum');
const ctx = canvas.getContext('2d');

let audioCtx;
let analyser;
let source;
let isAudioInit = false;

function initSpectrum() {
  if (isAudioInit) return;

  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();

    source = audioCtx.createMediaElementSource(music);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    analyser.fftSize = 64; // Jumlah batang spektrum
    isAudioInit = true;
    
    resizeCanvas();
    drawSpectrum();
  } catch (err) {
    console.log("Spektrum gagal dimuat:", err);
  }
}

function resizeCanvas() {
  if (canvas && canvas.parentElement) {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
}

function drawSpectrum() {
  requestAnimationFrame(drawSpectrum);

  if (!analyser) return;

  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const barWidth = (canvas.width / bufferLength) * 1.2;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const barHeight = (dataArray[i] / 255) * (canvas.height * 0.5);

    const gradient = ctx.createLinearGradient(0, canvas.height, 0, canvas.height - barHeight);
    gradient.addColorStop(0, 'rgba(51, 153, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(26, 117, 255, 0.8)');

    ctx.fillStyle = gradient;
    ctx.fillRect(x, canvas.height - barHeight, barWidth - 3, barHeight);

    x += barWidth;
  }
}

window.addEventListener('resize', resizeCanvas);

// --- SETUP MUSIK ---
const setMusic = (i) => {
  seekBar.value = 0;
  let song = songs[i];
  currentMusic = i;
  music.src = song.path;
  
  songName.innerHTML = song.name;
  artistName.innerHTML = song.artist;
  disk.style.backgroundImage = `url('${song.cover}')`;
  
  currentTime.innerHTML = '00:00';
  
  music.addEventListener('loadedmetadata', () => {
    seekBar.max = music.duration;
    musicDuration.innerHTML = formatTime(music.duration);
  });
}

setMusic(0);

const formatTime = (time) => {
  if (isNaN(time)) return "00 : 00";
  let min = Math.floor(time / 60);
  if (min < 10) min = `0${min}`;
  let sec = Math.floor(time % 60);
  if (sec < 10) sec = `0${sec}`;
  return `${min} : ${sec}`;
}

const playMusic = () => {
  initSpectrum();

  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  music.play().then(() => {
    playBtn.classList.remove('pause');
    disk.classList.add('play');
  }).catch(err => {
    console.log("Autoplay dicegah browser:", err);
  });
}

const pauseMusic = () => {
  music.pause();
  playBtn.classList.add('pause');
  disk.classList.remove('play');
}

playBtn.addEventListener('click', () => {
  if (music.paused) {
    playMusic();
  } else {
    pauseMusic();
  }
});

setInterval(() => {
  if (!music.paused) {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);
    if (Math.floor(music.currentTime) >= Math.floor(seekBar.max) && seekBar.max > 0) {
      forwardBtn.click();
    }
  }
}, 500);

seekBar.addEventListener('input', () => {
  music.currentTime = seekBar.value;
  currentTime.innerHTML = formatTime(music.currentTime);
});

forwardBtn.addEventListener('click', () => {
  currentMusic = (currentMusic >= songs.length - 1) ? 0 : currentMusic + 1;
  setMusic(currentMusic);
  playMusic();
});

backwardBtn.addEventListener('click', () => {
  currentMusic = (currentMusic <= 0) ? songs.length - 1 : currentMusic - 1;
  setMusic(currentMusic);
  playMusic();
});
