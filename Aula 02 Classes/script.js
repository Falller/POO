function ConstroiPessoaContructor(nome, email, idade){
    this.nome = nome,
    this.email = email,
    this.idade = idade

// reescrevendo o método toString que seria encontrado no escopo

this.toString = () => {
    return ("Nome da Pessoa: " + this.nome + " Email da Pessoa: " + this.email + " Idade da Pessoa: " + this.idade)
}
}

// instanciando a função construtora
let jaque = new ConstroiPessoaContructor(
"Marlon",
"emicida@gmail.com",
26);

console.log(jaque.toString())

//Transformando a função construtora em uma classe

class Pessoa {
    constructor(nome, email, idade) {
        this.nome = nome,
        this.email = email,
        this.idade = idade
    }

    get dobraIdade() {
        return this.idade * 2;
    }

    calculaIdade = function (anoAtual, anoNascimento) {
        return anoAtual - anoNascimento;
    }

}

