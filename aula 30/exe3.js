/* Escreva uma função chamada somarValores que recebe um
array de números e retorna a soma de todos os valores do array
utilizando a função reduce.
❖ Exemplo de uso:
const numeros = [1, 2, 3, 4, 5]
const resultado = somarValores(numeros)
console.log(resultado) // Output: 15
Exercício 1 */

const io = require('../io/io')


const numeros = [1, 2, 3, 4, 5]

const dobrar = num => num * 2

function Numeros(numeros, dobrar) {

return numeros.map(dobrar)

  
}

const resultado = Numeros(numeros, dobrar)
console.log(resultado)
console.log(numeros)