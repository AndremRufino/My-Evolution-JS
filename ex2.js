function chefe(){
    let option
    do{
    option = Number(prompt('Escolha \n 1. Cadastrar pessoa (RG, CPF, NOME) \n 2. Cadastrar imóvel (CÓDIGO, ENDEREÇO, TAMANHO, TIPO , VALOR e RG do dono) \n 3.Calcular valor total em imoveis \n CPF da pessoa com o imóvel mais caro \n 4.Escolha para saber o cpf da pessoa com o Imóvel mais valioso \n5. Sair'))
        switch(option){
            case 1 : cadastrarPessoa()
            break
            case 2 : cadastrarImovel()
            break
            case 3 : TotalImovel()
            break
            case 4 : caro()
            break
            default : console.log('Numero inválido, tente novamente ! ')
        }
}   
    while (option != 5)
}

var vetor = [[/*RG*/],[/*CPF*/],[/*NOME*/],[/*QtdEmImóvel*/]] // Faz o cadastro da primeira opção , apenas rg, cpf e nome 
cadastrarPessoa = () =>{

    rg = parseInt(prompt("Digite o numero de RG : "))
    vetor[0].push(rg)
    cpf = Number(prompt("Digite o numero de CPF : "))
    vetor[1].push(cpf)
    nome = prompt('Digite o nome da pessoa : ')
    vetor[2].push(nome)
    vetor[3].push(0)

    console.log(vetor[0])
    console.log(vetor[1])
    console.log(vetor[2])

}

this.rg = false
var maior = 0
var CPFmaior = 0

var vetor2 = [[/*CÓDIGO*/],[/*ENDEREÇO*/],[/*TAMANHO*/],[/*VALOR*/]]
cadastrarImovel = () =>{
    let codigo = Number(prompt("Digite o numero Código do Imóvel :  : "))
    vetor2[0].push(codigo)
    let endereco = prompt("Digite o endereço : ")
    vetor2[1].push(endereco)
    let tamanho = prompt('Digite o tamanho da casa em M : ')
    vetor2[2].push(tamanho)
    var valor = parseInt(prompt(`Digite o valor do Imovel : `))
    vetor2[3].push(valor)
    
    this.rg = parseInt((prompt(`Digite o RG do proprietário : `)))
    var resultado = false
    for(let i = 0;i <= vetor[0].length;i = i + 1){
        if(parseInt(vetor[0][i]) == parseInt(rg)){
            var resultado = true
            vetor[3][i] = parseInt(vetor[3][i]) + parseInt(valor) // Faz a somatória em patrimônio
            console.warn(`SOMA DO PATRIMONIO : ${vetor[3][i]}`)
            if(parseInt(valor) > parseInt(this.maior)){
                CPFmaior = vetor[1][i]
                }
        

        }
    }
    if(resultado == false){
        while(resultado == false){
            alert("RG Inválido. Tente novamente!")
            this.rg = parseInt((prompt(`Digite o RG do proprietário : `)))
            var resultado = false
            for(let i = 0;i <= vetor[0].length;i = i + 1){
                if(parseInt(vetor[0][i]) == parseInt(rg)){
                    var resultado = true
                    vetor[3][i] = parseInt(vetor[3][i]) + parseInt(valor) // Faz a somatória em patrimônio
                    console.warn(`SOMA DO PATRIMONIO : ${vetor[3][i]}`)
                    if(parseInt(valor) > parseInt(this.maior)){
                        CPFmaior = vetor[1][i]
                        }
                
        
                }
            }
        
        }        
    }

    console.warn('Imóvel cadastrado com Sucesso! ',resultado)

}

TotalImovel = () =>{
    let rg = parseInt(prompt("Informe o RG para consulta de patrimonio : ")) 
    for(let i = 0; i < vetor[0].length; i = i + 1){
        console.warn('Passou aqui')
        if(parseInt(vetor[0][i]) == parseInt(rg)){
            console.log(`O patrimônio total do sr(a). ${vetor[2][i]} é de ${vetor[3][i]}`)
        }
    }

}

caro = () =>{
    console.log(CPFmaior)
}

chefe()


