// === PENGATURAN TANGGAL ===
const startDate = new Date("2023-08-10T00:15:38");

// === ELEMEN DOM ===
const layarLoading = document.getElementById('layarLoading');
const barIsi = document.getElementById('barIsi');
const nilaiPersen = document.getElementById('nilaiPersen');
const kontenUtama = document.getElementById('kontenUtama');
const mataKiri = document.getElementById('mataKiri');
const mataKanan = document.getElementById('mataKanan');
const textAwal = document.getElementById("textAwal");
const openBtn = document.getElementById("openBtn");
const openGalleryBtn = document.getElementById("openGalleryBtn");
const openMusicBtn = document.getElementById("openMusicBtn");
const envelope = document.getElementById("envelope");
const closeLetter = document.getElementById("closeLetter");
const closeGallery = document.getElementById("closeGallery");
const homePage = document.getElementById("homePage");
const galleryPage = document.getElementById("galleryPage");
const musicPage = document.getElementById("musicPage");
const heartsContainer = document.getElementById("heartsContainer"); //[span_3](start_span)[span_3](end_span)

let persen = 0;

// Fungsi Loading
const prosesLoading = setInterval(() => {
    persen++;
    barIsi.style.width = persen + '%';
    nilaiPersen.textContent = persen + '%';

    if(persen === 100) {
        clearInterval(prosesLoading);
        setTimeout(() => {
            layarLoading.classList.add('selesai');
            kontenUtama.style.display = 'block';
        }, 500);
    }
}, 50);

// Fungsi Efek Kedip Mata Otomatis
function mataBerkedip() {
    // Tutup mata
    mataKiri.classList.add('mata-tutup');
    mataKanan.classList.add('mata-tutup');

    // Buka mata lagi setelah 150ms
    setTimeout(() => {
        mataKiri.classList.remove('mata-tutup');
        mataKanan.classList.remove('mata-tutup');
    }, 180);

    // Jadwal kedip berikutnya secara acak (2-4 detik)
    setTimeout(mataBerkedip, Math.random() * 1000 + 1000);
}

// Mulai kedip mata saat halaman siap
mataBerkedip();



// === FUNGSI BUKA TUTUP ===
openBtn.addEventListener("click", () => {
    envelope.classList.add("open");
    textAwal.style.display = "none";
    openBtn.style.display = "none";
    openGalleryBtn.style.display = "none";
    openMusicBtn.style.display = "none";
    startCountdown();
});

closeLetter.addEventListener("click", () => {
    envelope.classList.remove("open");
    setTimeout(() => {
        textAwal.style.display = "block";
        openBtn.style.display = "block";
        openGalleryBtn.style.display = "block";
        openMusicBtn.style.display = "block";
    }, 200);
});

openGalleryBtn.addEventListener("click", () => {
    homePage.classList.add("hidden");
    galleryPage.classList.add("active");
    musicPage.classList.add("hidden");
});

closeGallery.addEventListener("click", () => {
    galleryPage.classList.remove("active");
    setTimeout(() => {
        homePage.classList.remove("hidden");
    }, 300);
});

openMusicBtn.addEventListener("click", () => {
  homePage.classList.add("hidden");
  galleryPage.classList.add("hidden");
  musicPage.classList.add("active");
});

closeMusic.addEventListener("click", () => {
  musicPage.classList.remove("active");
  setTimeout(() => {
    homePage.classList.remove("hidden");
  }, 300);
});

closeMusic.addEventListener("click", () => {
  musicPage.classList.remove("active");
  
  // Hentikan musik saat halaman ditutup
  const music = document.querySelector('#audio');
  const playBtn = document.querySelector('.play-btn');
  const disk = document.querySelector('.disk');
  if (music) {
    music.pause();
    playBtn.classList.add('pause');
    disk.classList.remove('play');
  }

  setTimeout(() => {
    homePage.classList.remove("hidden");
  }, 300);
});


// === HITUNG WAKTU BERSAMA ===
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    if (diff < 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000); //[span_4](start_span)[span_4](end_span)

    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0"); //[span_5](start_span)[span_5](end_span)
}

let timerInterval;
function startCountdown() {
  if (timerInterval) return;
  
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

// === ANIMASI HATI MELAYANG ===
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💙";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
    heart.style.fontSize = (Math.random() * 15 + 15) + "px";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 300); 

// === SETUP AUDIO CONTEXT & SPECTRUM VISUALIZER ===
const canvas = document.getElementById('spectrum');
const ctx = canvas.getContext('2d');

let audioCtx;
let analyser;
let source;
let isAudioContextInitialized = false;

// Fungsi untuk menyesuaikan ukuran canvas
function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
}

// Inisialisasi Web Audio API (Harus dijalankan via interaksi pengguna)
function initAudioContext() {
    if (isAudioContextInitialized) return;

    // Buat AudioContext baru
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();

    // Hubungkan elemen audio ke AudioContext & Analyser
    source = audioCtx.createMediaElementSource(music);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    // Pengaturan Analyser
    analyser.fftSize = 128; // Jumlah sampel data frekuensi (semakin besar, semakin tajam)
    
    isAudioContextInitialized = true;
    drawSpectrum();
}

// Inisialisasi AudioContext saat tombol Play pertama kali diklik
playBtn.addEventListener('click', () => {
    if (!isAudioContextInitialized) {
        initAudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}, { once: false });

// Render Grafik Spektrum secara Real-Time
function drawSpectrum() {
    requestAnimationFrame(drawSpectrum);

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    analyser.getByteFrequencyData(dataArray);

    // Bersihkan canvas setiap frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / bufferLength) * 1.5;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        // Hitung tinggi batang berdasarkan data frekuensi
        const barHeight = (dataArray[i] / 255) * (canvas.height * 0.4);

        // Buat warna gradien sesuai tema UI biru
        const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
        gradient.addColorStop(0, 'rgba(51, 153, 255, 0.2)'); // Biru transparan bawah
        gradient.addColorStop(1, 'rgba(26, 117, 255, 0.8)'); // Biru terang atas

        ctx.fillStyle = gradient;

        // Gambar batang spektrum di area bawah player
        ctx.fillRect(
            x, 
            canvas.height - barHeight, 
            barWidth - 2, 
            barHeight
        );

        x += barWidth;
    }
}

// Event listener untuk penyesuaian ukuran layar
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
