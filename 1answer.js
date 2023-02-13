/*
GO-HIKING! Rekomendasi.

Eko bersama teman-temannya berencana hiking. Lalu dia menggunakan layanan aplikasi GO-HIKING! untuk mendapatkan rekomendasi destinasi yang tersedia.
Namun aplikasi GO-HIKING! baru memiliki 2 destinasi yaitu Pulau Jawa dan Papua.

Jika Eko dan teman-temannya ingin hiking di Pulau Jawa dan memiliki uang dibawah 20000, maka aplikasi GO-HIKING! akan merekomendasikan ke:
    - Gunung Ciremai
    - Gunung Prau

Jika Eko dan teman-temannya ingin hiking di Pulau Jawa dan memiliki uang 20000 ke atas, maka aplikasi GO-HIKING! akan merekomendasikan ke:
    - Gunung Ciremai
    - Gunung Prau
    - Gunung Merbabu
    - Gunung Semeru

Jika Eko dan teman-temannya ingin hiking di Pulau Papua dan memiliki uang dibawah 20000, maka aplikasi GO-HIKING! akan merekomendasikan ke:
    - Gunung Jayawijaya
    - Gunung Mandala

Jika Eko dan teman-temannya ingin hiking di Pulau Papua dan memiliki uang 20000 ke atas, maka aplikasi GO-HIKING! akan merekomendasikan ke:
    - Gunung Jayawijaya
    - Gunung Mandala
    - Gunung Yamin
    - Gunung Sumantri

Buatlah aplikasi sesuai dengan kondisi di atas.

NOTES: 

1. JIKA DESTINASI SELAIN PULAU "Jawa" DAN "Papua", APLIKASI AKAN MENGELUARKAN PESAN "Pulau <DESTINASI> belum terjangkau Go-Hiking!"
2. JIKA INPUT DESTINASI KOSONG/UNDEFINED/FALSY, APLIKASI AKAN MENGELUARKAN PESAN "Error! input tidak valid!"

EXAMPLE:

1. 
INPUT:
let money = 5000;
let destination = "Jawa";

OUTPUT:
output = "Dengan uang <money>, kamu bisa menuju ke gunung Ciremai dan Prau di pulau <destination>";

2. 
INPUT:
let money = 25000;
let destination = "Papua";

OUTPUT:
output = "Dengan uang <money>, kamu bisa menuju ke gunung Jayawijaya, Mandala, Yamin dan Sumantri di pulau <destination>";

*/

let money = 2000;
let destination = "Jawa";
let output = "";

if (!destination) {
  output = "Error! input tidak valid!";
} else {
  if (destination === "Jawa") {
    if (money < 20000) {
      output = `Dengan uang ${money}, kamu bisa menuju ke gunung Ciremai dan Prau di pulau ${destination}`;
    } else {
      output = `Dengan uang ${money}, kamu bisa menuju ke gunung Ciremai, Prau, Merbabu dan Semeru di pulau ${destination}`;
    }
  } else if (destination === "Papua") {
    if (money < 20000) {
      output = `Dengan uang ${money}, kamu bisa menuju ke gunung Jayawijaya dan Mandala di pulau ${destination}`;
    } else {
      output = `Dengan uang ${money}, kamu bisa menuju ke gunung Jayawijaya Mandala, Yamin dan Sumantri di pulau ${destination}`;
    }
  } else {
    output = `Pulau ${destination} belum terjangkau Go Hiking`;
  }
}

console.log(output);




