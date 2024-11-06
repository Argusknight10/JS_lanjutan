// CARA PERTAMA
// const box = document.querySelector('.box')
// box.addEventListener('click', function(){
//     this.classList.toggle('size') // Ini digunakan untuk menambahkan class baru jika belum ada, dan menghilangkan class jika sudah ada
//     setTimeout(() => { // setTimeOut : digunakan untuk menunggu beberapa detik baru menjalankan sebuah function
//         this.classList.toggle('caption');
//     }, 600)
// })

// CARA KEDUA
const box = document.querySelector('.box')
box.addEventListener('click', function(){
    let satu = 'size'
    let dua = 'caption'
    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu]
    }
    this.classList.toggle(satu) // Ini digunakan untuk menambahkan class baru jika belum ada, dan menghilangkan class jika sudah ada
    setTimeout(() => { // setTimeOut : digunakan untuk menunggu beberapa detik baru menjalankan sebuah function
        this.classList.toggle(dua);
    }, 600)
})
