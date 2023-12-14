/* Faça um programa para receber dados de 10 pessoas (nome, idade e
documento) criando um objeto para cada pessoa. Depois mostrar as que são
maiores de idade (use o método de array .filter() para filtrar).*/
const io = require('../io/io')

let alunos = []

for (let i = 1; i < 3; i++) {
    io.write (`${i} Digite o nome do aluno`)
    let nome = io.read()
    io.write (`${i} Digite a idade do aluno`)
    let idade = io.readInt()
    io.write (`${i} Digite o documento do aluno`)
    let documento = io.readInt()

    let aluno = {
        nome, 
        idade, 
        documento
    }
    alunos.push(aluno)    
}

io.write(alunos)

const maioresidade = alunos.filter ((aluno) => {
    return aluno = aluno.idade > 18
})

io.write(`maioresidade`)
io.write(maioresidade)

