/**
 * Crie uma função construtora, para criar um "Aluno".

Deverá conter as seguintes propriedades: nome, idade, email, matricula, curso.

Instancie o Aluno e printe o resultado.

Utilizando a estrutura de aluno, adicione uma função que retorne o curso do aluno através do prototype da função.

Invoque a função e printe o resultado

 */

function Aluno(nome, idade, email, matricula, curso) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.matricula = matricula;
    this.curso = curso;
};

const aluno1 = new Aluno(
    "Marlon",
    29,
    "emicida@gmail.com",
    123456,
    "POO"
    );

console.log(aluno1);


Aluno.prototype.getCurso = function () {
    return this.curso;
}

console.log(aluno1.getCurso())

