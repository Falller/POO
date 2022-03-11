/**
 * Crie um objeto de nome aluno e adicione as seguintes propriedades:

nome, matricula e idade.

Crie neste mesmo objeto aluno, uma função que receba como parâmetro o curso do aluno,

o parâmetro deverá ter um default, adicione esse parâmetro recebido em uma propriedade do objeto aluno.

Retorne o objeto aluno ANTES da chamada da função.

Retorne o objeto aluno APÓS a chamada da função

 */
const aluno = {
    nome: "Marlon",
    matricula: 123456,
    idade: 29,
    curso: "",
    
    cursoaluno: function(curso = "") {
        return this.curso = curso
    }
}

console.log(aluno);
aluno.cursoaluno("POO");
console.log(aluno);