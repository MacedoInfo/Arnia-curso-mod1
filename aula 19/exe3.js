const io = require ('../io/io')

io.write ("digite o primeiro lado")
const lado1 = io.readInt()

io.write ("digite o segundo lado")
const lado2 = io.readInt()

io.write ("digite o terceiro lado")
const lado3 = io.readInt()
 
if( lado2 === lado3) {
    io.write ("é triangulo")
}

else {
    io.write ("não é triangulo")
}