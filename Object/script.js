// CARA BUAT OBJEK DI JAVASCRIPT

// 1. OBJECT LITERAL
// === Tidak bisa apabila terdapat object dengan nama variable yang sama ===
// === Problem : Tidak Efektif Untuk Object yang Banyak
let warrior = { 
    nama: 'ARYA',
    power: 100,
    attack: function(damage){
        this.power = this.power + damage;
        console.log(`${this.nama} Sangatlah kuat!, segera kalahkan musuh dengan cepat!`)
    }

}
let knight = { 
    nama: 'BAGUS',
    health: 150,
    defense: function(shield){
        this.health = this.health + shield;
        console.log(`${this.nama} Sangatlah kuat!, jangan biarkan musuh mengalahkanmu!`)
    }

} 

// 2. FUNCTION DECLARATION
// === Tidak perlu membuat duplikat object, hanya perlu membuat 1, lalu sisanya hanya tinggal bagaimana cara memanggilnya/instansi-nya saja ===
const methodWarrior = {
    attack: function(damage){
        this.power += damage
        console.log(`${this.nama} Sangatlah kuat!, segera kalahkan musuh dengan cepat!`)
    },
    defense: function(shield){
        this.health += shield
        console.log(`${this.nama} Mendapatkan shield!, lindungi kawanmu!`)
    },
    hurt: function(pain){
        this.health -= pain
        console.log(`${this.nama} Terkena serangan!, segera mundur untuk melindungi diri!`)
    },
}
function Warrior(nama, power, health) {
    let warrior = {};
    warrior.nama = nama;
    warrior.power = power;
    warrior.health = health;
    warrior.attack = methodWarrior.attack;      // Memanggil object terpisah dari method warrior
    warrior.hurt = methodWarrior.hurt;          // Memanggil object terpisah dari method warrior
    warrior.defense = methodWarrior.defense;    // Memanggil object terpisah dari method warrior
    return warrior
}
let Arya = Warrior('Arya', 100, 200)   // Inisialisasi
let Rafif = Warrior('Rafif', 150, 300)  // Inisialisasi

// 3. CONSTRUCTOR FUNCTION
// === Tidak perlu menuliskan deklarasi variable dan return ===
function Knight(nama, power, health) {
    this.nama = nama;
    this.power = power;
    this.health = health;
    this.attack = function(damage){
        this.power += damage
        console.log(`${this.nama} Sangatlah kuat!, segera kalahkan musuh dengan cepat!`)
    }
    this.defense = function(shield){
        this.health += shield
        console.log(`${this.nama} Mendapatkan shield!, lindungi kawanmu!`)
    }
    this.hurt = function(pain){
        this.health -= pain
        console.log(`${this.nama} Terkena serangan!, segera mundur untuk melindungi diri!`)
    }
}
let Bagus = new Knight('Bagus', 200, 600) // Inisialisasi menggunakan 'new'
let Nuha = new Knight('Nuha', 300, 500) // Inisialisasi menggunakan 'new'

// 4. OBJECT.CREATE()
const methodAssasin = {
    attack: function(damage){
        this.critical += damage
        console.log(`${this.nama} Sangatlah mematikan!, segera habisi musuh dengan cepat!`)
    },
    defense: function(shield){
        this.health += shield
        console.log(`${this.nama} Mendapatkan shield!, bantai musuh tanpa takut kehilangan darah!`)
    },
    hurt: function(pain){
        this.health -= pain
        console.log(`${this.nama} Terkena serangan!, segera bersembunyi untuk melindungi diri!`)
    },
    poisoned: function(nerf){
        this.critical -= nerf
        console.log(`${this.nama} Terkena poison!, bertahan terlebih dahulu sembari memulihkan kekuatan!`)
    },
}
function Assasin(nama, critical, health) {
    let assasin = Object.create(methodAssasin); // Tidak perlu memanggil object yang banyak
    assasin.nama = nama;
    assasin.critical = critical;
    assasin.health = health;
    return assasin
}
let ARGUS = Assasin('ARGUS', 450, 200)   // Inisialisasi
let ELVIRA = Assasin('ELVIRA', 500, 100)  // Inisialisasi

// 5. PROTOTYPE
// === Versi Object ===
function Mage(nama, magic, health) {
    this.nama = nama;
    this.magic = magic;
    this.health = health;
}
Mage.prototype.attack = function(damage){
    this.magic += damage
    return(`${this.nama} Sangatlah fantastis!, segera kelabui musuh dengan sihirmu!`)
}
Mage.prototype.defense = function(shield){
    this.health += shield
    return(`${this.nama} Mendapatkan shield!, segera lindungi rekan tim mu dengan sihirmu!`)
}
Mage.prototype.hurt = function(pain){
    this.health -= pain
    return(`${this.nama} Terkena serangan!, segera mundur dan pulihkan dirimu!`)
}
Mage.prototype.poisoned = function(nerf){
    this.magic -= nerf
    return(`${this.nama} Terkena poison!, bersembunyilah dan pulihkan sihirmu!`)
}
let BATMAN = new Mage('BATMAN', 650, 150)
let JOKER = new Mage('JOKER', 700, 100)

// === Versi Class === 
class Mage {
    constructor(nama, magic, health){
        this.nama = nama;
        this.magic = magic;
        this.health = health;
    }
    attack(damage){
        this.magic += damage
        return(`${this.nama} Sangatlah fantastis!, segera kelabui musuh dengan sihirmu!`)
    }
    defense(shield){
        this.health += shield
        return(`${this.nama} Mendapatkan shield!, segera lindungi rekan tim mu dengan sihirmu!`)
    }
    hurt(pain){
        this.health -= pain
        return(`${this.nama} Terkena serangan!, segera mundur dan pulihkan dirimu!`)
    }
    poisoned(nerf){
        this.magic -= nerf
        return(`${this.nama} Terkena poison!, bersembunyilah dan pulihkan sihirmu!`)
    }
}
let IRON_MAN = new Mage('IRON MAN', 650, 150)
let CAPTAIN_AMERICA = new Mage('CAPTAIN AMERICA', 700, 100)
