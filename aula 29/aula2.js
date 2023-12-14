
const io = require('../io/io')

class Pessoa {
    id
    nome
    cpf
    anoNacimento

    idade(){
        const calculo = 2023 - this.anoNacimento
        return calculo
    }

}

const pessoa1 = new Pessoa()
pessoa1.id = 1
pessoa1.nome = `Fulano`
pessoa1.cpf = '000.000.009-99'
pessoa1.anoNacimento = 2003
const idadePessoa1 = pessoa1.idade()


const pessoa2 = new Pessoa()
pessoa2.id = 2
pessoa2.nome = `Fulano2`
pessoa2.cpf = '000.000.029-99'
pessoa2.anoNacimento = 1903
const idadePessoa2 = pessoa2.idade()

console.log(pessoa1)
console.log(idadePessoa1)

console.log(pessoa2)
console.log(idadePessoa2)