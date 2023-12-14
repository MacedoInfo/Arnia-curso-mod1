const io = require('../io/io')

const pessoa1 = { nome: `Maria da silva`, dataNascimento: `15/07/1990`,profissao: `secretaria`}

const pessoa2 = { 
    nome: `João maria da silva`, 
    dataNascimento: `15/07/1990`,
    profissao: `medico`}


    console.log(pessoa1)
    console.log(pessoa2)

    console.log(pessoa1.profissao)

    pessoa1.idade = 35
    console.log(pessoa1.idade)
    
    console.log(pessoa1)
    delete pessoa1.idade
    console.log(pessoa1)
