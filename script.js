const layarLoading = document.getElementById('layarLoading');
const barIsi = document.getElementById('barIsi');
const nilaiPersen = document.getElementById('nilaiPersen');
const kontenUtama = document.getElementById('kontenUtama');
const mataKiri = document.getElementById('mataKiri');
const mataKanan = document.getElementById('mataKanan');
const themeToggleBtn = document.getElementById('themeToggle');

let persen = 0;

// Fungsi Loading (DIPERTAHANKAN UTUH)
const prosesLoading = setInterval(() => {
    persen++;
    barIsi.style.width = persen + '%';
    nilaiPersen.textContent = persen + '%';

    if(persen === 100) {
        clearInterval(prosesLoading);
        setTimeout(() => {
            layarLoading.classList.add('selesai');
            kontenUtama.style.display = 'block';
            themeToggleBtn.style.display = 'block'; // Tampilkan tombol tema setelah loading selesai
        }, 500);
    }
}, 50);

// Fungsi Efek Kedip Mata Otomatis (DIPERTAHANKAN UTUH)
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

// =======================================================
// INTERAKSI TOGGLE TEMA (TERANG / GELAP)
// =======================================================
themeToggleBtn.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        themeToggleBtn.textContent = 'Amz fav color';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = 'Wiaa fav color';
    }
});

// =======================================================
// FUNGSI GANTI KARTU (DENGAN CONTAINER CARD-CONTENT BARU)
// =======================================================
let kartu = document.getElementById('kartu');

function ubahKartu() {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });

  kartu.innerHTML = `
    <div class="card-content animate__animated animate__zoomIn">
      <h1 class="message">
        <span>Aku mau ucapin sesuatuu!</span>
        sedikit aja kok🤏
      </h1>
      <h2 class="sender animate__animated animate__pulse animate__infinite">- Dari : Amzzay -</h2>
      <button class="btn" onclick="ubahKartu2()">Klik lagi!</button>
    </div>
  `;
}  

function ubahKartu2() {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });

  kartu.innerHTML = `
    <div class="card-content animate__animated animate__zoomIn">
      <h1 class="message">
        <span>"Happy anniversary sayanggg"</span> semoga kamu sehat terus yaa, dan semoga langgeng hubungannya sama aku >_<
      </h1>
      <h2 class="sender animate__animated animate__pulse animate__infinite">- Dari : Amzzay -</h2>
      <button class="btn" onclick="ubahKartu3()">Klik lagi!</button>
    </div>
  `;
}  

function ubahKartu3() {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });

  kartu.innerHTML = `
    <div class="card-content animate__animated animate__zoomIn">
      <h1 class="message">
        <span>Waktu berjalan begitu cepat,</span> tapi rasanya baru kemarin kita berjanji untuk saling menemani. <span>Terima kasih untuk setiap tawa, sabar menghadapiku, dan kasih sayang</span> yang tak pernah putus.
      </h1>
      <h2 class="sender animate__animated animate__pulse animate__infinite">- Dari : Amzzay -</h2>
      <button class="btn" onclick="ubahKartu4()">Klik lagi!</button>
    </div>
  `;
}  

function ubahKartu4() {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });

  kartu.innerHTML = `
    <div class="card-content animate__animated animate__zoomIn">
      <h1 class="message">
        <span>Ada waktu di mana kita</span> tak saling sapa, jalan kita berbelok ke arah yang berbeda. Namun hari ini, aku bersyukur luar biasa: meski <span>sempat hilang kabar,</span> pada akhirnya kita kembali menemukan rumah yang sama, yaitu di hati satu sama lain.
      </h1>
      <h2 class="sender animate__animated animate__pulse animate__infinite">- Dari : Amzzay -</h2>
      <button class="btn" onclick="ubahKartu5()">Klik lagi!</button>
    </div>
  `;
}  

function ubahKartu5() {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });

  kartu.innerHTML = `
    <div class="card-content animate__animated animate__zoomIn">
      <img src="wiaa.jpg" alt="wiaa foto">
      <h1 class="message">
        lihat. dulu kamu begitu <span>lucu dan</span> menggemaskan, sekarang kamu terlihat sangat <span>cantik</span>
      </h1>
      <h2 class="sender animate__animated animate__pulse animate__infinite">- Dari : Amzzay -</h2>
      <button class="btn" onclick="ubahKartu6()">Lanjutt</button>
    </div>
  `;
}  

function ubahKartu6() {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });

  kartu.innerHTML = `
    <div class="card-content animate__animated animate__zoomIn">
      <h1 class="message">
        Kamu pasti bertanya-tanya <span>kenapa aku masih punya foto kamu pas dulu kan?</span> Aku emang udah ngehapus semua foto kamu,tapi banyak yg gak sengaja kesimpan di google foto hehee 🤗
      </h1>
      <h2 class="sender animate__animated animate__pulse animate__infinite">- Dari : Amzzay -</h2>
      <button class="btn" onclick="ubahKartu7()">Lanjutt</button>
    </div>
  `;
}  

function ubahKartu7() {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });

  kartu.innerHTML = `
    <div class="card-content animate__animated animate__zoomIn">
      <h1 class="message">
        <span>Jangan kebanyakan nonton BL okey? </span>aku gak ngelarang, tapi aku cuman takut kalo kamu terbiasa liat cowok cantik <span>nantinya kamu bosen sama aku</span> 😔
      </h1>
      <h2 class="sender animate__animated animate__pulse animate__infinite">- Dari : Amzzay -</h2>
      <button class="btn" onclick="ubahKartu8()">Lanjutt</button>
    </div>
  `;
}  

function ubahKartu8() {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });

  kartu.innerHTML = `
    <div class="card-content animate__animated animate__zoomIn">
      <h1 class="message">
        Aku lupa kapan tanggal pastinya pas kita pertama kali jadian. Jadi aku kirim sekarang deh hehe... <span>yg penting masih dibulan agustus kan?😜</span>
      </h1>
      <h2 class="sender animate__animated animate__pulse animate__infinite">- Dari : Amzzay -</h2>
      <button class="btn" onclick="ubahKartu9()">Klik lagi!</button>
    </div>
  `;
}  

function ubahKartu9() {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });

  kartu.innerHTML = `
    <div class="card-content animate__animated animate__zoomIn">
      <h1 class="message">
        kamu ada kata-kata buat aku enggaa? kalo ada kirim teks nya yaa! <span>Klik "kirim" dibawah</span> <br>👇<br>
        <a href="https://wa.me/+6283852501431" target="_blank" style="color: var(--text-highlight); font-weight: bold; text-decoration: none;">Kirim</a>
      </h1>
      <h2 class="sender animate__animated animate__pulse animate__infinite">- Dari : Amzzay -</h2>
      <button class="btn" onclick="refresh()">Kembali</button>
    </div>
  `;
}  

function refresh() {
  location.reload();
}
