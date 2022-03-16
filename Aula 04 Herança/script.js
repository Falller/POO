class Animal {
    #pais
    constructor(especie, pais) {
        this.especie = especie,
        this.#pais = pais
    }
}

// Extendendo a classe pessoa de animal

class Pessoa extends Animal{
    constructor(nome, idade, pais, especie = "Homo Sapiens Sapiens") {
        super(especie, pais),
        this.nome = nome,
        this.idade = idade
    } 

    imprimeDados (saudacao) {
    return `${saudacao}, ${this.nome} tem ${this.idade} anos.`
    }
}

class Cidadao extends Pessoa {
    constructor (nome, idade, cpf, rg) {
        super(nome, idade),
        //método super executa o constructor da classe
        //neste caso a classe Pai é Pessoa
        //internamente o método super está fazendo
        //this.nome = nome
        //this.idade = idade
        this.cpf = cpf,
        this.rg = rg
    }
}

const joao = new Pessoa('João', 25, "Brasil");
console.log(joao)

const jaque = new Cidadao('Carlos', 24, '00011122233', '12345678910')
console.log(jaque)