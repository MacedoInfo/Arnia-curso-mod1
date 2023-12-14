const io = require ('../io/io')

io.write ("digite o primeiro numero")
const nome1 = io.read()

io.write ("digite o segundo numero")
const nome2 = io.read()

if (nome1 > nome2){
    io.write(`Numero é maior ${nome1}`)
} else {
    io.write(`Numero é maior ${nome1}`)
}