class Pessoa {
    constructor(nome, idade) {
        this._nome = nome,
        this._idade = idade
    }

    apresentar () {
        return `O meu nome é ${this._nome} e tenho ${this._idade} anos!`
    }
}

//instanciar a classe pessoa
const p1 = new Pessoa("Marlon", 29);
console.log(p1);
console.log(p1.apresentar());
console.log(p1._nome);
console.log(JSON.stringify(p1));
console.log(Object.keys(p1));
console.log(Object.values(p1));

// Classe privada

class pessoaPrivada {
    #_nome
    #_idade
    _email //publico
    constructor(nome, idade, email) {
        this.#_nome = nome,
        this.#_idade = idade
        this._email = email;
    }

    get nome() {
        return this.#_nome;
    }

    set nome(n) {
        this.#_nome = n;
    }

    apresentar () {
        return `O meu nome é ${this.#_nome} e tenho ${this.#_idade} anos!`
    }

    //para resolver o caso do Json
    toJason() {
        return {
            nome: this.nome,  // Get
            idade: this.#_idade, // privado
            email: this._email // publico
        }
    }
}

const p2 = new pessoaPrivada("Ricardo", 20, "emicida@gmail.com");
console.log(p2);
console.log(p2._email);
console.log(p2.apresentar());
console.log(p2._nome);
console.log(p2.nome);
p2.nome = "Pedro";
console.log(p2._nome);
console.log(p2.nome);
console.log(JSON.stringify(p2.toJason()));
console.log(Object.keys(p2));
console.log(Object.values(p2));

/**
 * Crie uma classe Sorteio que tem o número de pessoas inscritas e um método sorteiaPremio que sorteia um número que corresponderá ao número de inscrição do participante e declara o vencedor. 
 */

class Sorteio {
    #_insc;
    constructor (quant) {
        this.#_insc = quant;
    }

    sorteiaPremio () {
        return Math.floor(Math.random() * (this.#_insc - 1)) + 1;
    }
}

const s1 = new Sorteio(50);

console.log(s1.sorteiaPremio());