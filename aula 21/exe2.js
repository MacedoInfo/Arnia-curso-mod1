const io = require('../io/io')

let maior_reta = 0

io.write(`digite tamanho da Primeira reta`)
const valor1 = io.readInt()

io.write(`digite tamanho da Segunda reta`)
const valor2 = io.readInt()

io.write(`digite tamanho da Segunda reta`)
const valor3 = io.readInt()

if (valor1 >= valor2 || valor1 >= valor3) {
    io.write(`Maior reta é ${valor1}`)
}
else{ io.write(`erroMaior reta é ${valor1}`)
    
} 