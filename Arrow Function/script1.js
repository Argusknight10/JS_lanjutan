// FUNCTION DECLARATION (umum)
function showMessage (name){
    alert(`Hello ${name}`)
} 
showMessage('Arya')

// FUNCTION EXPRESSION (Membungkus function ke dalam variable)
let tampilPesan = function (name){
    alert(`Hello ${name}`)
}
tampilPesan('Bagus')

// ARROW FUNCTION
// "Bentuk lain yang lebih ringkas dari Function Expression" ~MDN
let showPesan = (name) => {
    alert(`Hello ${name}`)
}
showPesan('Arya Bagus')


// <<< CONTOH LAIN >>>
// FUNCTION EXPRESSION 
const namaSaya = function(nama){
    return `Nama saya adalah ${nama}`
}
console.log(namaSaya('Arya'))

// ARROW FUNCTION
const namaAing = (nama) => { // Jika parameter hanya 1, maka bisa tanpa perlu menggunakan () untuk membungkus parameter-nya
    return `Nama saya adalah ${nama}` // Jika function hanya berisikan return seperti ini maka kita bisa menuliskan tanpa return
} // Kita juga tidak perlu menuliskan '{}' apabila function berkemungkinan untuk dituliskan hanya se-baris saja
console.log(namaAing('Bagus'))
// -> Menjadi seperti ini :
const myName = nama => `Nama saya adalah ${nama}` // Contoh penerapan (Implicit Return)
console.log(myName('Arya Bagus'))
// -> Apabila tidak ada parameter
const haloDunia = () => `Halo Dunia`
console.log(haloDunia())

// <<< CONTOH LAIN >>>
// FUNCTION EXPRESSION
const kampusSaya = function(prodi, kampus){
    return `Saya berkuliah di ${kampus} dengan mengambil prodi ${prodi}`
}
console.log(kampusSaya('Teknologi Rekayasa Multimedia', 'PENS'))

// ARROW FUNCTION
const myCampus = (prodi, kampus) => {
    return `Saya berkuliah di ${kampus} dengan mengambil prodi ${prodi}`
}
console.log(myCampus('Teknologi Rekayasa Multimedia', 'PENS'))

// <<< CONTOH LAIN >>>
// Menggunakan function.map() => Memetakan sebuah function ke dalam Array
let Mahasiswa = ['Arya Bagus', 'Rafif Nuha', 'Ihda Wafa']
// -> Function Biasa
let jumlahHuruf = Mahasiswa.map(function (nama){
    return nama.length
})
console.log(jumlahHuruf)
// -> Arrow Function (Cara return Array)
let jmlHurufArray = Mahasiswa.map(nama => nama.length)
console.log(jmlHurufArray)
// -> Arrow Function (Cara return Object)
let jmlHurufObject = Mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length }))
console.log(jmlHurufObject)
console.table(jmlHurufObject) // Jika ingin muncul dengan tampilan lebih rapih
