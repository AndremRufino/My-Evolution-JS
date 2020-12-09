//EX - Faça um programa que calcule a média aritmetica apenas de numeros pares de um vetor
var contador = 0 
var vetor = []
var a = 0
while(a != -1){
    a = Number(prompt('Digite o valor desejado : '))
    if((a != -1) && (a % 2 == 0)){
        vetor.push(a)
        contador += 1 
    }
}
var Total = vetor.reduce((tot, numero) => {
    return tot += numero
},0)
console.log(`O valor da soma do vetor = ${Total}`)
console.log('Contador',contador)
console.warn(`O total é : `,Total/contador)