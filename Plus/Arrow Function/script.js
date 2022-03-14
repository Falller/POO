// estrutura (argumentos) => { corpo da função}

const soma = (n1, n2) => {
    return n1 + n2;
}

console.log(soma(1,2));

// se tiver uma única instrução
const multiplicacao = (n1, n2) => n1*n2;
console.log(multiplicacao(2,4));

// retorno implícito
const x1 = () => "retorno implícito";

console.log(x1());

// Funcionamento do THIS

const carro = {
    modelo: "Uno",
    marca: "Fiat",
    nomeCompleto: function () {
        return `${this.modelo} ${this.marca}`
    }
}

console.log(carro.nomeCompleto());

const carro1 = {
    modelo: "Palio",
    marca: "Fiat",
    nomeCompleto: () => {
        return `${this.modelo} ${this.marca}`
    }
}

console.log(carro1.nomeCompleto())