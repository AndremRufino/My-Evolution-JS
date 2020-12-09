class carros {
    // Marca, modelo, ano, valor
    constructor(marca, modelo, ano, valor){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.valor = valor; 
    }
    get chama(){
        return calcula()
    }
    calcula(){
        return this.marca
    }
} 


function chefe(){

    vetor = []
    matriz = [[prompt('Digite a marca do carro : '),prompt('Digite o modelo do carro :'),prompt('Digite o ano do carro : '),prompt('Digite o valor do carro : ')],[prompt('Digite a marca do carro : '),prompt('Digite o modelo do carro :'),prompt('Digite o ano do carro : '),prompt('Digite o valor do carro : ')],[prompt('Digite a marca do carro : '),prompt('Digite o modelo do carro :'),prompt('Digite o ano do carro : '),prompt('Digite o valor do carro : ')],[prompt('Digite a marca do carro : '),prompt('Digite o modelo do carro :'),prompt('Digite o ano do carro : '),prompt('Digite o valor do carro : ')]]
    
    var carro1 = new carros(matriz[0,0],matriz[0,1],matriz[0,2],matriz[0,3])
    var carro2 = new carros(matriz[1,0],matriz[1,1],matriz[1,2],matriz[1,3])
    var carro3 = new carros(matriz[2,0],matriz[2,1],matriz[2,2],matriz[2,3])
    var carro4 = new carros(matriz[3,0],matriz[3,1],matriz[3,2],matriz[3,3])

    console.log(carro1.chama)
    console.log(carro2.chama)
    console.log(carro3.chama)
    console.log(carro4.chama)

}

chefe()


