

// 1. Penggunaan `if`, `else`, dan `nested if` dengan variabel `game`:

let game = "Garena Undawn";
let genre = "";

if (game === "Garena Undawn") {
  genre = "RPG";
} else if (game === "Minecraft") {
  genre = "Sandbox";
} else {
  genre = "Genre tidak dikenal";
}

console.log("Genre dari game " + game + " adalah: " + genre);


// 2. Penggunaan `switch case` dengan variabel `sakit`:

let sakit = "demam";
let pesan = "";

switch (sakit) {
  case "demam":
    pesan = "Anda mungkin perlu istirahat dan minum obat demam.";
    break;
  case "flu":
    pesan = "Anda harus minum banyak air dan beristirahat.";
    break;
  case "sakit perut":
    pesan = "Hindari makanan berat dan minum air putih.";
    break;
  default:
    pesan = "Penyakit tidak dikenal. Silakan berkonsultasi dengan dokter.";
}

console.log("Jika Anda sakit " + sakit + ", saran kami adalah: " + pesan);


// 3. Penggunaan `for statement` dengan variabel `programmer`:

let programmer = "Satriawan";

for (let i = 0; i < 5; i++) {
  console.log("Selamat siang, " + programmer + "! Semangat dalam menulis kode!");
}


// 4. Penggunaan `while` dengan variabel `mataKuliah`:

let mataKuliah = "Pemrograman Web";
let totalSesi = 5;

let i = 1;
while (i <= totalSesi) {
  console.log("Sesi ke-" + i + ": Belajar " + mataKuliah);
  i++;
}



// 5. Penggunaan `do while` dengan variabel `elektronik`:

let elektronik = "Laptop";
let count = 0;

do {
  console.log("Saya memiliki " + elektronik + " di rumah.");
  count++;
} while (count < 3);


// 6. Penggunaan `function` dengan variabel `bahasaProgram`:

function tampilkanBahasa(bahasaPrograman) {
    console.log("Saya suka bahasa pemrograman " + bahasaPrograman + "!");
  }
  
  let bahasaPrograman = "JavaScript";
  tampilkanBahasa(bahasaPrograman);
  


