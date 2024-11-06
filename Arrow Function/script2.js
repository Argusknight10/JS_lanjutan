// KONSEP THIS PADA ARROW FUNCTION

// <<<<< CONSTRUCTOR FUNCTION >>>>>
// * Jika menggunakan constructor function => Apabila kita menuliskan this. di dalam functionnya, maka mengacu pada onject-nya
// CONTOH 1
const MHS = function(){
    this.nama = "ARYA";
    this.prodi = "TRM";
    console.log(this); 
}
const arya = new MHS();
// CONTOH 2
const MAHASISWA = function(){
    this.nama = "BAGUS";    
    this.angkatan = 2024;
    this.kampus =  "PENS";
    this.perkenalan = function(){
        console.log(`Izin memperkenalkan diri! Saya ${this.nama} dari ${this.kampus} ${this.angkatan}`);
    }
}
const bagus = new MAHASISWA();

// <<<<< ARROW FUNCTION >>>>>
// * Tidak semua function bisa diubah menjadi arrow function, namun jika method() bisa
// * Arrow function sebenarnya tidak menyimpan contact this., jadi tidak ada konsep this. dalam function, dia akan cari keluar
// ================================================================================================================================================
// >>>>> ARROW FUNCTION X CONSTRUCTOR FUNCTION CARA KE-1
const mhs = function(){
    this.nama = "BAGUS";    
    this.angkatan = 2024;
    this.kampus =  "PENS";
    this.perkenalan = () => {
        console.log(`Izin memperkenalkan diri! Saya ${this.nama} dari ${this.kampus} ${this.angkatan}`);
    }
}
const argus = new mhs();
// >>>>> ARROW FUNCTION X OBJECT LITERAL
// * this. disini mengacu pada Window. Jadi konsep this. pada arrow function tidak dapat digunakan dengan baik, karena sejatinya konsep this. tidak dimiliki arrow function.
const mahasiswa = {
    nama : 'Arya',
    prodi : 'TRM',
    nrp : 5324600017,
    perkenalan: () => {
        console.log(`Perkenalkan, saya ${this.nama} dari prodi ${this.prodi} dengan NRP ${this.nrp}.`); // Hasil akan muncul undefined
    }
}
// >>>>> ARROW FUNCTION X CONSTRUCTOR FUNCTION CARA KE-2
const Mhs = function(){
    this.nama = "BAGUS";    
    this.angkatan = 2024;
    this.kampus =  "PENS";
    this.umur = 18;
    this.perkenalan = function() { // JENIS FUNCTION EXPRESSION (Ditandai dengan function yang disimpan dulu ke dalam variable, maka function ini tidak akan kena hoisting)
        console.log(`Izin memperkenalkan diri! Saya ${this.nama} dari ${this.kampus} ${this.angkatan}`);
    }
    setInterval(function(){ // JENIS FUNCTION DECLARATION (Timbul masalah ketika function ini bisa melakukan hoisting, yang dimana this. tidak mengarah ke local, melainkan ke Window)
        console.log(this.umur++); // Akan menghasilkan 'Nan'
    }, 500)
}
const Args = new Mhs();
// ----- SOLUSI
const Mahasiswa = function(){
    this.nama = "BAGUS";    
    this.angkatan = 2024;
    this.kampus =  "PENS";
    this.umur = 18;
    this.perkenalan = function() { // JENIS FUNCTION EXPRESSION (Ditandai dengan function yang disimpan dulu ke dalam variable, maka function ini tidak akan kena hoisting)
        console.log(`Izin memperkenalkan diri! Saya ${this.nama} dari ${this.kampus} ${this.angkatan}`);
    }
    setInterval(() => { // MENGGUNAKAN ARROW FUNCTION (Arrow function tidak memiliki konsep this., maka this. akan mencari ke lexical scope-nya, maka akan mengacu ke local yaitu fungsi Mahasiswa)
        console.log(this.umur++);
    }, 500)
}
const Argus = new Mahasiswa();

