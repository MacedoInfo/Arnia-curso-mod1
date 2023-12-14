const io = require('../io/io')
 let Ndias = 0
 let totalcigarro = 0
 let carteiras_anos = 0
 let valor_ano = 0
io.write('Quantos anos voce fuma?')
const anos = io.readInt()

io.write('Quantos cigarros por dia?')
const Ncigarro = io.readInt()

io.write('valor da carteira de cigarro?')
const valor = io.readInt()

if (anos === 0 ) {
    io.write('Voce não fuma')
} else {
    Ndias = anos * 365
    totalcigarro = Ndias * Ncigarro
    carteiras_anos = totalcigarro /20
    

    io.write(`quantidade de dias${Ndias}`)
    io.write(`quantidade de Cigarros${totalcigarro}`)
    io.write(`quantidade de Carteiras${carteiras_anos}`)
    io.write(`Valor gasto com Cigarro $${carteiras_anos * valor}`)







}