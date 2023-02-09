/*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Beever
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/

// function jumlahTabungan(listHarga, history) {
//     // Write your code here
// }

// var hargaMakanan = [
//   {
//     nama: "ayam",
//     harga: 5000
//   },
//   {
//     nama: "nasi",
//     harga: 2000
//   },
//   {
//     nama: "cola",
//     harga: 1000
//   },
//   {
//     nama: "chiki",
//     harga: 1500
//   },
//   {
//     nama: "hotdog",
//     harga: 3000
//   },
//   {
//     nama: "aqua",
//     harga: 2000
//   }
// ]

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`;
// console.log(jumlahTabungan(hargaMakanan, historyPembelian))

function history(a) {
  let result = a.split(".");
  let result2 = [];
  let hari = [];
  let makanan = []
  for (let i = 0; i < result.length; i++) {
    let x = result[i].split("-");
    result2.push(x);
  }

  for (let j = 0; j < result2.length; j++) {
    hari.push(result2[j][0])
    makanan.push(result2[j][1].split(','))
  }

  // function reducer(hari,makanan){
  //   return{...hari, makanan}
  // }

  // let jadwal = reduce(reducer,{})

  let jadwal = {
    Senin: makanan[0],
    Selasa: makanan[1],
    Rabu: makanan[2],
    Kamis: makanan[3],
    Jumat: makanan[4],
  }

  return jadwal
}

console.log(history(historyPembelian));
