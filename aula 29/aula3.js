class Pessoa{
    id
    cpf
    nome
    anoNascimento
    constructor(idContrutor, cpfContrutor){
    this.id = idContrutor
    this.cpf = cpfContrutor
    }
}

const pessoa = new Pessoa(3,`24346656`)
console.log(pessoa)