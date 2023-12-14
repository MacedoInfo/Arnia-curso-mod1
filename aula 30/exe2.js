
const io = require('../io/io')


function somarValores(produtos) {
    
  const soma = produtos.reduce((acumulador, elemento  ) =>{
 return acumulador + elemento.preco
}, 0)
return soma
}
const produtos = [
    { id: 1, nome: 'Camiseta', preco: 29.9 },
    { id: 2, nome: 'Calça', preco: 59.9 },
    { id: 3, nome: 'Tênis', preco: 99.9 }
   ]
const resultado = somarValores(produtos)
console.log(resultado)

