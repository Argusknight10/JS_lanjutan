// CLOSURE
// === EXECUTION CONTEXT, HOISTING & SCOPE ===
// 2 FASE EXECUTION CONTEXT :
// > Creation
// > Execution
console.log(nama); // Seharusnya unefined karena pendefinisian variable berada setelah pemanggilan variable, hal ini menyebabkan variable dianggap belum terdefinisi 
var nama = 'ARYA'
// <<< Creation phase pada Global Context >>>
// nama var         = undefined -> default
// nama function    = fn() -> diisi kode function itu sendiri

// HOISTING : menyebabkan apabila terdapat variable/function yang berada di bawah akan dinaikkan ke atas
// JS mendefinisikan object :
// > window     = global object
// > this       = window

// <<< Execution phase  : Berurutan dari atas ke bawah, makannya kenapa ketika pada contoh di atas, dimana variable didefinisikan setelah pemanggilan, sistem mendeteksi apabila variable belum terdefinsi

var namaSaya = 'BAGUS'
var umur = 18
var kampus = 'Politeknik Elektronika Negeri Surabaya'
var prodi = 'Teknologi Rekayasa Multimedia'

console.log(Perkenalan)     // menampilkan kode yang terdapat pada function tersebut
console.log(Perkenalan())   // menampilkan isi dari kode yang dieksekusi pada function tersebut

function Perkenalan(){
    // jika tidak ada return pada kode ini, maka hasil console.log() ketika ditampilkan akan masih muncul undefined karena sebuah function harus memiliki nilai kembalian(return)
    console.log(`Nama saya adalah ${namaSaya}, saya berumur ${umur}, yang berkuliah di ${kampus}, dengan mengambil prodi ${prodi}`);
    return

    // Langsung me-return nilai dari function yang dimana bisa dipanggil di luar function
    return(`Nama saya adalah ${namaSaya}, saya berumur ${umur}, yang berkuliah di ${kampus}, dengan mengambil prodi ${prodi}`);
}

// Function membuat Local Execution Context yg di dalamnya terdapat creation dan execution phase
// Local Execution Content bisa mengakses :
// -> window
// -> arguments(bisa berisi apapun yang dimasukkan ke parameter
// -> hoisting)
var firstAcc = 'argus_.10'
var secondAcc = 'argss.p'
// Jika parameter dihilangkan, maka akan mengecek variable local terlebih dahulu, jika tidak ada maka akan mengecek ke parameter, apabila masih tidak ada, maka akan mencari variable global
function cetakURL(firstAcc, secondAcc){
    console.log(arguments) // *Yang sebenarnya 'selly23ajeng' disini dia ada di dalam sebuah object yang bernama arguments
    console.log('Arguments 1 : '+arguments[0]) // Proses pemanggilan 'selly23ajeng'
    console.log('Arguments 2 : '+arguments[1]) // Proses pemanggilan 'selly23ajeng'
    var instagramURL = 'https://www.instagram.com/'
    console.log(`First Account : ${instagramURL + firstAcc}`)
    console.log(`Second Account : ${instagramURL + secondAcc}`)
    return 
}
// console.log(cetakURL(firstAcc, secondAcc)) // jika menggunakan parameter sesuai yang terdapat pada function
console.log(cetakURL('selly23ajeng', 'paushauss')) // jika menambahkan data sendiri ketika pemanggilan yang dimana nilai akan dimasukkan ke dalam parameter function

// Contoh Implementasi Function Bertumpuk
function a(){
    console.log(`Ini function a`)

    function b(){
        console.log(`Ini function b`)

        function c(){
            console.log(`Ini function c`)
        }
        c()
    }
    b()
}
a()

function one(){
    var namaSaya = 'Arya'
    console.log(namaSaya)
}
function two(){
    console.log(namaSaya)
}
console.log(namaSaya)
var namaSaya = 'Bagus'
one()
two('Permono')
console.log(namaSaya)

