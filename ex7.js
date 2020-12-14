
class Computador{
    constructor(nomeDono,marca,modelo,hd,ram){
        this.nomeDono = nomeDono
        this.marca = marca
        this.modelo = modelo 
        this.hd = hd
        this.ram = ram
    }
    diferencaHd = (b) => {
        if((this.hd - b) > 0){
        this.hd = this.hd - b 
        return this.hd}
        else{
            return 'HD tem que ser positivo'
        }
    }
    diferencaRam = (b) => {
        if((this.ram - b) > 0){
        this.ram = this.ram - b 
        return this.ram}
        else{
            return 'RAM tem que ser positivo'
        }
    }
    somaRam = (b) => {
        if((this.ram + b) > 0){
        this.ram = this.ram + b 
        return this.ram}
        else{
            return 'RAM tem que ser positivo'
        }}

    somaHd = (b) => {
        if((this.ram + b) > 0){
        this.hd = this.hd + b 
        return this.hd}
        else{
            return 'HD tem que ser positivo'
        }}

}

var a = new Computador('joao','hrs100','ndaaa',2000,1800)

console.log(a.diferencaHd(100))
console.log(a.somaHd(100))
console.log(a.diferencaRam(100))
console.log(a.somaRam(100))

var b = new Computador('','hrs','asda',2000,1800)

console.log(b.diferencaHd(100))
console.log(b.somaHd(100))
console.log(b.diferencaRam(100))
console.log(b.somaRam(100))