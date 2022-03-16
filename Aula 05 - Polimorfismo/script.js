
class Pessoa {
    constructor(nome, idade, endereco) {
        this.nome = nome,
        this.idade = idade,
        this.endereco = endereco
    }

    cumprimentaPessoa = () => `Olá ${this.nome}!`
}

class PessoaFisica extends Pessoa {
    constructor(nome, idade, endereco, rg) {
        super(nome, idade, endereco);
        this.rg = rg
    }

    cumprimentaPessoa = () => `Olá ${this.nome} do RG ${this.rg}!`
}

const pessoa = new Pessoa("Nilvo", 28, "Rua sem Saída");
console.log(pessoa.cumprimentaPessoa());

const pessoafisica = new PessoaFisica("Chico", 49, "Rua dos Andradas", "123456749");
console.log(pessoafisica.cumprimentaPessoa());