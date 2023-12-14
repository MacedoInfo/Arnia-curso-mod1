const io = require('../io/io')
let contador = 0
while (contador <= 2) {
    io.write('Brasil')
    contador = contador + 1
}

contador = 0
io.write('informe um numero')
let contador1 = io.read()
io.write('informe um nome')
nome = io.read()

while (contador < contador1) {
    io.write(nome)
    contador = contador + 1
}

contador = 1
let resultado1 = 0
let resultado

while (contador <= 20) {
    io.write(`informe o ${contador} numero`)
    resultado = io.readInt()
    contador = contador + 1
    resultado1 = resultado1 + resultado
}
resultado1 = resultado1 / 20
io.write(`Resultadoo ${resultado1}`)