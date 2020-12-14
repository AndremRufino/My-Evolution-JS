class TV {
    constructor(marca,modelo,canal,volume){
        this.marca = marca
        this.modelo = modelo
        this.canal = canal 
        this.volume = volume
    }
    AumentaVolume = (x) => {
        this.volume = this.volume + x
        return this.volume 
    }
    DiminuiVolume = (y) => {
        if ((this.volume - y) > 0){
        this.volume = this.volume - y
        return this.volume}
        else{
            return 'O Volume não pode ser negativo ! '
        }
    }
    TrocarCanal = (v) => {
        if(v > 0){
        this.canal = v 
        return this.canal
    }}

}

var a = new TV('Brastemp', 'xyz',56,20)
console.log(a.AumentaVolume(5))
console.log(a.DiminuiVolume(10))
console.log(a.TrocarCanal(10))

console.log('\n')
var b = new TV('Colorado','izx',90,10)
console.log(b.AumentaVolume(10))
console.log(b.DiminuiVolume(6))
console.log(b.TrocarCanal(3))