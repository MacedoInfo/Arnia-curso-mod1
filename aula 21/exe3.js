const io = require('../io/io')

let Total = 0

io.write(`Digite quantos anos`)
const anos = io.readInt()

io.write(`quandos Mes`)
const mes = io.readInt()

io.write(`quandos Dias`)
const dias = io.readInt()

Total = anos * 365
Total = Total + (mes * 30)
Total = Total + dias
io.write(`quandos Dias ${Total}`)
