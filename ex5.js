//EX - Faça um programa que calcule a soma dos elementos de um vetor
var vetor = []
var a = 0
while(a != -1){
    a = Number(prompt('Coloque o valor (Digite "-1" para sair) :'))
    if(a != -1){
        vetor.push(a)}
}

let total = vetor.reduce((acumulador, numero) => {
    console.info(`Soma Total : ${acumulador} `)
    console.log(`Valor no vetor : ${numero}`)
    console.log('   ')
    return acumulador += numero
    
}   
,0)
console.log(total)
console.warn(vetor)