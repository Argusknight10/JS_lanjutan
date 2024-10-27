// ========== IMPLEMENTASI VAR ==========
var a = 10
b = 15 // Meskipun penulisan 'var' dihilangkan, tetapi nilai tetap menjadi milik variable 'b', karena 'b' tetap dibaca sebagai suatu variable (javascript seolah menambahkan keyword 'var' di depan variable-nya)
console.log(`a = ${a}`)
console.log(`b = ${b}`)

var c // *Yang terjadi sebenarnya = Javascript menganggap variable c sudah ada sebelumnya, namun belum memiliki nilai 
console.log(`c = ${c}`) // Jika kode dituliskan terbalik begini, maka menggunakan prinsip "Hoisting" yang dimana akan muncul hasil 'undefined', hal ini diakibatkan karena hal yang sebenarnya terjadi adalah Javascript menganggap variable c sudah ada sebelumnya, namun belum memiliki nilai 
var c = 20
// >> MINUS 1 === Hal ini menimbulkan keanehan, yang dimana apabila di bahasa pemrograman lain yang menggunakan cara ini maka akan terjadi error. Untuk itu penggunaan var ini mulai ditinggalkan dan beralih kepada 'const' atau 'let', agar akhirnya memunculkan error pula jika menggunakan cara ini seperti bahasa pemrograman lain 

for(var i = 0; i < 10; i++){ // Harusnya muncul angka 0 -> 9
    console.log(i) 
}
console.log(i) // Nilai akan tetap bertambah/di-incrementkan meskipun saya menuliskan console.log() pada luar blok for loop ini yang dimana memungkinkan kita untuk mengakses variable di dalam looping. *Padahal di bahasa pemrograman lain tidak bisa
// -> Jika di bahasa pemrograman lain menganut  == "BLOCK SCOPE"
// -> Jika di Javascript menganut               == "FUNCTION SCOPE"

// Agar variable tadi tidak bisa diakses, maka harus mengubah scope-nya menjadi function scope
function tes(){
    for(var i = 0; i < 10; i++){
        console.log(i) 
    }
}
tes()
console.log(i) // Sekarang ketika saya ingin mencoba akses variable yang ada di dalamnya maka akan error
// >> MINUS 2 === Menyulitkan programmer javascript untuk mengakali agar javascript ini berperilaku sama seperti bahasa pemrograman lainnya
// Biasanya menggunakan IIFE atau SIAF
// > IIFE = Immediately Invoked Function Expression (Sebuah function expression yang dipanggil langsung setelah dibuat)
// > SIAF = Self Invoking Anonymous Function (Menjaga Supaya variable yang ada di dalam function-nya tidak bisa diakses dari luar)
// Contoh SIAF
(function(){
    for(var i = 0; i < 10; i++){
        console.log(i) 
    }
})()
console.log(i) // Akan terjadi error
// Namun cara-cara diatas adalah cara lama yang dimana pada Javascript yang sekarang tidak lagi menggunakan cara tersebut, namun beralih menggunakan let 


// LET dan CONST sudah menganut 'BLOCK SCOPE'
// Sedangkan VAR masih menganut 'FUNCTION SCOPE'

// ========== IMPLEMENTASI LET DALAM KASUS PERBANDINGAN DENGAN VAR ===========
// Secara otomatis akan memunculkan error seperti bahasa pemrograman yang lain
console.log(variable_a)
let variable_a = 10
for(let i = 0; i < 10; i++){
    console.log(i) 
}
console.log(i) 

// ========== IMPLEMENTASI CONST DALAM KASUS PERBANDINGAN DENGAN VAR ==========
// Secara otomatis akan memunculkan error seperti bahasa pemrograman yang lain
console.log(variable_b)
const variable_b = 10
for(const i = 0; i < 10; i++){
    console.log(i) 
}
console.log(i)


// <<<<<<<<< PERBEDAAN LET & CONST >>>>>>>>>  
// >>> LET 
let A = 10 // Jika kita yakin bahwa nilai dari variablenya akan berubah ubah
A = 5
console.log(`Let A : ${A}`) // Nilai 'A' akan berubah menjadi 5

// >>> CONST
const B = 10 // Jika kita yakin tidak akan mengubah nilai dari variable-nya maka gunakan 'const'
B = 15
console.log(`Let B : ${B}`) // Akan muncul error, karena penggunaan 'const', nilai dari 'B' seharusnya tidak dapat diganti

// Kenapa kita menggunakan 'const'? == Untuk meminimalisir perubahan state, mengusahakan sebisa mungkin nilai dari variable itu tidak berubah 

// Kita masih bisa mengubah nilai dari const, namun pada kasus kode yang lain
// Berikut adalah implementasinya :
// ** Object **
const mhs = {
    nama: 'Arya',
    umur: 18
}
mhs.umur = 20 // Cara yang bisa mengubah nilai adalah dengan seperti ini, yaitu nilai akan tetap bisa diubah asal kita tidak mengganti object-nya dengan object baru
mhs = {
    prodi: 'Teknologi Rekayasa Multimedia' // Contoh penerapan penggantian object dengan object baru yang menyebabkan error
}
console.log(mhs)
// ** Array **
const i = [1,2,3]
i.push(4) // Cara yang bisa mengubah nilai adalah dengan seperti ini, yaitu jika ingin menambahkan nilai pada index baru, maka menggunakan method push()
i = [1,2,3,4] // Contoh penerapan penggantian array dengan index baru yang menyebabkan error
console.log(i)
  