const io = require('../io/io')

function categoria(idade) {
    let resposta = "1"
    let resposta1 = "1"

    if (idade < 5 ) {
     resposta = `menor de idade`
     resposta1 = `sem categoria`
    }
    if (idade > 4 && idade < 8 ) {
        resposta = `5 a 7 anos`
        resposta1 = `Infantil A`
    }
    if (idade > 7 && idade < 11 ) {
        resposta = `8 a 10 anos`
        resposta1 = `Infantil B`
    }
    if ( idade > 10 && idade < 14 ) {
        resposta = `11 a 13 anos`
        resposta1 = `Juvenil A`
    }
    if ( idade > 13 && idade < 19 ) {
        resposta = `14 a 18 anos`;
        resposta1 = `Juvenil B`;
    }
    if ( idade > 18 ) {
        resposta = `Maior de 18 anos`;
        resposta1 = `Adulto`;
    }

    return [resposta, resposta1]
}


io.write(`digite sua idade:`)
const res = io.readInt()
const msg = categoria(res)

io.write(`${msg[0]}`)
io.write(`${msg[1]}`)