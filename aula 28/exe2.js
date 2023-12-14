/* Faça um programa para receber os dados de 10 alunos (nome, matrícula e
nota) criando um objeto para cada aluno. Depois aumentar em 10% as notas
dos alunos com matrícula maior que 1000 e mostrar a lista de alunos atualizada.*/

const io = require('../io/io')

let alunos = []

for (let i = 1; i < 3; i++) {
    io.write (`${i} Digite o nome do aluno`)
    let nome = io.read()
    io.write (`${i} Digite a matrícula do aluno`)
    let matricula = io.readInt()
    io.write (`${i} Digite a nota do aluno`)
    let nota = io.readInt()

    let aluno = {
        nome, 
        matricula, 
        nota
    }
    alunos.push(aluno)    
}

io.write(alunos)

const matriculamaior = alunos.filter ((aluno) => {

    if (aluno.matricula > 1000) {
        return aluno.nota = 1.1 * aluno.nota 
    }
    
}) 


io.write(`Todos os alunos`)
io.write(matriculamaior)
