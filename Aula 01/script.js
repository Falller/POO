const pessoa = {
    nome: "Marlon",
    idade: 29,

    cumprimentaPessoa(nome = "") {
        return console.log("Seja bem vindo: " + nome);
    },

};

const mensagem = pessoa.cumprimentaPessoa("Adão");

const counter = {
    count: 0,
    next: function () {
        return this.count++;
    }
}

counter.next();
counter.next();
counter.next();

console.log(counter.count)

/**
*uso do this no contexto global
*/

console.log(this.window);

/** se eu atribuir uma propriedade ao objeto this no contexto global
 * o js adiciona a propriedade como sendo uma do objeto global
 */

this.color = "red";
console.log(window.color)

/** Contexto de Função
 * Em JS, conseguimos chamar funções de algumas formas:
 * Chamada de Função (function invocation)
 * Chamada de método (Method Invocation)
 * Chamada de Construtor (Constructor Invocation)
 * Chamada Indireta (Indirect Invocation)
 */

function show () {
    console.log(this === window)
}

show();

window.show();

console.log(window.show)

// Invocação de método

// Quando eu chamar o método do objeto
//o JS aponta o THIS para o objeto que possui o método

let carro = {
    marca: "Honda",
    getMarca: function() {
        return this.marca;
    }
}

let moto = {
    marca: "Yamaha" 
}

console.log(carro.getMarca());

let marca = carro.getMarca;
console.log(marca()); //undefined

let marca1 = carro.getMarca.bind(moto);
console.log(marca1());

// Chamada de Construtor

function Carro(placa, marca) {
    this.placa = placa;
    this.marca = marca;
}

console.log(Carro);

//Criar uma função dentro da função construtora Carro

Carro.prototype.getPlaca = function () {
    return this.placa;
}

console.log(Carro);

let carro1 = new Carro();

console.log(carro1)

function Carro2(marca) {
    if(!(this instanceof Carro2)) {
        throw Error ("Use o operador new para instaciar o Objeto")
    }
    this.marca = marca;
}

let bmw = Carro2("BMW");
console.log(bmw)