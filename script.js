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
const heartsContainer = document.getElementById("heartsContainer");

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
    mataKiri.classList.add('mata-tutup');
    mataKanan.classList.add('mata-tutup');

    setTimeout(() => {
        mataKiri.classList.remove('mata-tutup');
        mataKanan.classList.remove('mata-tutup');
    }, 180);

    setTimeout(mataBerkedip, Math.random() * 1000 + 1000);
}

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

const closeMusic = document.getElementById("closeMusic");
closeMusic.addEventListener("click", () => {
  musicPage.classList.remove("active");
  
  // Menghentikan musik lewat fungsi yang aman
  if (typeof pauseMusic === "function") {
    pauseMusic();
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
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
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
