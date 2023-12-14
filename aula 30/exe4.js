const io = require('../io/io')

/* const verificarTamanho = palavra => palavra.length > 5;
const palavras = ['casa', 'carro', 'bicicleta', 'abacaxi',
'livro']
const resultado = filtrarPalavras(palavras, verificarTamanho);
console.log(resultado) / */


const verificarTamanho = palavra => palavra.length > 5;

const palavras = ['casa', 'carro', 'bicicleta', 'abacaxi',
'livro']



function Palavras(palavras, verificarTamanho) {

return palavras.filter(verificarTamanho)
 
}

const resultado = Palavras(palavras, verificarTamanho)
console.log(resultado)
console.log(palavras)