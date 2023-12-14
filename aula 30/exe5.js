const estudantes = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Pedro', idade: 18 },
    { nome: 'Ana', idade: 21 }
   ]

   
   const aplicarDesconto = (estudantes) => {
    if (estudantes.idade > 20) {
        return estudantes.desconto = 0.1;
    }
    else{
        return estudantes.desconto= 0.5;
    }
    
   }

   const teste = aplicarDesconto(estudantes)
   console.log(estudantes);
   console.log(teste);