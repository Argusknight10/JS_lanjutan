// === CLOSURE === 
// Closure : Kombinasi antara function dan lingkungan leksikal(lexical scope) dalam function tersebut                           ~ MDN
// Closure : Sebuah function ketika memiliki akses ke parent scope-nya, meskipun parent scope-nya sudah selesai dieksekusi      ~ W3School
// Closure : Sebuah function dikembalikan oleh function yang lain, yang memiliki akses ke lingkungan saat ia diciptakan         ~ Code Fellow
// Closure : Sebuah function yang sebelumnya sudah memiliki data, hasil dari function yang lain                                 ~ Techsith

// === LEXICAL SCOPE ===
// Suatu kondisi apabila ketika memanggil dan menampilkan suatu variable, maka akan dicari terlebih dahulu mana variable terdekat yang memiliki nilai, jika tidak ada, maka ke parent variable, jika masih tidak ada, maka ke global
function init(){
    let name = 'Bagus' // Local Variable dari function init()
    let age = 18
    function showname(){ // Inner function(closure*) bisa memiliki akses ke parent variable
        console.log(name) // Akses ke parent variable 
        console.log(age) 
    }
    showname()
    console.log(showname())
    console.dir(showname) // Untuk memunculkan hasil dalam bentuk object
}
init()

// Contoh jika dalam penggunaan kasus function factory
function showname(){
    function name(name){ 
        console.log(name) 
    }
    return name
}
let panggilNama = showname()
panggilNama('Arya')

// Bisa juga lebih singkat yang dimana tidak perlu nama function dan return langsung pada function-nya
function showage(){
    return function(age){ 
        console.log(age) 
    }
}
let panggilUmur = showage()
panggilUmur(18)

// Kenapa Menggunakan Closure? 
// == Untuk membuat Function Factories 
// == Untuk membuat Private Method

// <<< Function Factory >>> == Kita membuat function sesuai dengan function yang lain
function saySalam(time){
    return function(name){
        console.log(`Halo ${name}, Selamat ${time}!`)
    }
}
let salamPagi = saySalam('Pagi')
let salamSiang = saySalam('Siang')
let salamSore = saySalam('Sore')
let salamMalem = saySalam('Malam')   
salamPagi('Arya')
salamSiang('Bagus')
salamSore('Rafif')
salamMalem('Nuha')

// <<< Private Method >>>
let counter1 = 0
let add1 = function(){
    return ++counter1
}
counter1 = 10 // Jika menggunakan cara penulisan kode seperti ini, akan menimbulkan masalah apabila count sudah banyak, lalu tiba-tiba diselipkan kode seperti ini, tentu nilai dari variable counter1 akan berubah, bukan berawal dari 0 lagi
console.log(add1())
console.log(add1())
console.log(add1())
// ========================================================================================================
let add2 = function(){
    let counter2 = 0 // Jika menggunakan cara seperti ini, masalah terletak pada setiap pemanggilan function add() maka variable counter2 yang memiliki nilai 0 akan terus dibaca dan akan terus menampilkan hasil 1 yang ditambah dengan 0 bukan 1 ditambah dengan n
    return ++counter2
}
counter2 = 10 
console.log(add2())
console.log(add2())
console.log(add2())
// ========================================================================================================
// <<<<<< SOLUSI >>>>>>
// ========================================================================================================
// Menggunakan Inner Function 
let add3 = function(){
    let counter3 = 0 // Seolah-olah counter3 menjadi private tidak bisa diakses dari luar, tapi nilai tetap dipertahankan karena menjadi closure
    return function(){
       return ++counter3 // counter3 ini akan selalu mengacu pada nilai dari counter sebelumnya
    }
}
let a = add3()
console.log(a())
console.log(a())
console.log(a())
// ========================================================================================================
// Ada cara agar tidak perlu menyelipkan penulisan variable 'let a = add3()' untuk membungkus function-nya
// Menggunakan metode SIAF (Self Invoking Anonymous Function)
let add4 = (function(){
    let counter4 = 0 // Seolah-olah counter4 menjadi private tidak bisa diakses dari luar, tapi nilai tetap dipertahankan karena menjadi closure
    return function(){
       return ++counter4 // counter4 ini akan selalu mengacu pada nilai dari counter sebelumnya
    }
})()
counter4 = 100 // Sekarang penyelipan kode ini tidak lagi mengganggu
console.log(add4())
console.log(add4())
console.log(add4())