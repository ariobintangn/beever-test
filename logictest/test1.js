let words = "beever";

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut :
// b
// be
// bee
// beev
// beeve
// beever

// ===SOLUTION===

/* 
1. buatlah pengulangan (iterasi) untuk mencetak hasil yang diinginkan (console log)
2. buatlah sebuah variabel penampung untuk dicetak pada setiap pengulangan, kita namakan saja words2
3. pada setiap pengulangan, words2 diisi oleh huruf sesuai urutan pengulangan. Misal pada pengulangan pertama, maka huruf yang diambil adalah "b", lalu pada pengulangan kedua huruf yang diambil adalah "be" dst
4. pada setiap pengulangan, words2 dicetak (console log)
*/

let words2 = "";
for (let i = 0; i < words.length; i++) {
  words2 += words[i];
  console.log(words2);
}
