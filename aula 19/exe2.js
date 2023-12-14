const io = require ('../io/io')

io.write ("digite o primeiro numero")
const nome1 = io.readInt()

io.write ("digite o segundo numero")
const nome2 = io.readInt()
const resultado = nome1 * nome2
if (resultado > 10){
    io.write(`Numero é maior que ${resultado}`)
} else {
    io.write(`Numero é menor que 10 ${resultado}`)
}