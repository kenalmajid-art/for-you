const layarLoading = document.getElementById('layarLoading');
const barIsi = document.getElementById('barIsi');
const nilaiPersen = document.getElementById('nilaiPersen');
const kontenUtama = document.getElementById('kontenUtama');
const mataKiri = document.getElementById('mataKiri');
const mataKanan = document.getElementById('mataKanan');

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


let kartu = document.getElementById('kartu');

function ubahKartu() {
  // Efek kembang api digital (confetti)
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });

  // Mengubah konten dengan class Vanilla CSS yang baru
  kartu.innerHTML = `
    <h1 class="message animate__animated animate__zoomIn">
      <span>Aku mau ucapin sesuatuu!</span>
      sedikit aja kok🤏
    </h1>
    <h2 class="sender animate__animated animate__pulse animate__infinite">- Dari : Amzzay -</h2>
    <button class="btn btn-secondary" onclick="ubahKartu2()">Klik lagi!</button>
  `;
}  

function ubahKartu2() {
  // Efek kembang api digital (confetti)
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });

  // Mengubah konten dengan class Vanilla CSS yang baru
  kartu.innerHTML = `
    <h1 class="message animate__animated animate__zoomIn">
      Aku cuman mau bilang <span>"Happy anniversary sayanggg"</span> semoga kamu sehat terus yaa, dan semoga langgeng hubungannya sama aku >_<
    </h1>
    <h2 class="sender animate__animated animate__pulse animate__infinite">- Dari : Amzzay -</h2>
    <button class="btn btn-secondary" onclick="ubahKartu3()">Klik lagi!</button>
  `;
}  

function ubahKartu3() {
  // Efek kembang api digital (confetti)
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });

  // Mengubah konten dengan class Vanilla CSS yang baru
  kartu.innerHTML = `
    <h1 class="message animate__animated animate__zoomIn">
      <span>Jangan kebanyakan nonton BL okey? </span>aku gak ngelarang, tapi aku cuman takut kalo kamu terbiasa liat cowok cantik nantinya kamu bosen sama aku 😔
    </h1>
    <h2 class="sender animate__animated animate__pulse animate__infinite">- Dari : Amzzay -</h2>
    <button class="btn btn-secondary" onclick="ubahKartu4()">Lanjutt</button>
  `;
}  

function ubahKartu4() {
  // Efek kembang api digital (confetti)
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });

  // Mengubah konten dengan class Vanilla CSS yang baru
  kartu.innerHTML = `
    <h1 class="message animate__animated animate__zoomIn">
      Aku lupa kapan tanggal pastinya pas kita pertama kali jadian. Jadi aku kirim sekarang deh hehe... <span>yg penting masih dibulan agustus kan?😜</span>
    </h1>
    <h2 class="sender animate__animated animate__pulse animate__infinite">- Dari : Amzzay -</h2>
    <button class="btn btn-secondary" onclick="ubahKartu5()">Klik lagi!</button>
  `;
}  

function ubahKartu5() {
  // Efek kembang api digital (confetti)
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });

  // Mengubah konten dengan class Vanilla CSS yang baru
  kartu.innerHTML = `
    <h1 class="message animate__animated animate__zoomIn">
      kamu ada kata-kata buat aku enggaa? kalo ada kirim teks nya yaa! <span>Klik link dibawah</span> <br>👇<br>
      <a href="https://wa.me/+6283852501431" target="_blank">Kirim</a>
    </h1>
    <h2 class="sender animate__animated animate__pulse animate__infinite">- Dari : Amzzay -</h2>
    <button class="btn btn-secondary" onclick="refresh()">Kembali</button>
  `;
}  

function refresh() {
  location.reload();
}
