
const io = require('../io/io')


class Computador {
    id
    marca
    modelo
    cor
    processador
}

const comp = new Computador()
comp.id = 1
comp.marca = 'HP'
comp.modelo = `XPTO`
comp.cor = `Preto`
comp.processador = `Intel XPTO `

console.log(comp)