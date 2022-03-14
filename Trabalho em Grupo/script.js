/**
 * Crie uma ou mais classe para representar um app de banco
 * 
 * - Deverá ter diferenciação de cliente PJ e PF
 * 
 * Pense no que deve ou não ser tratado como herança
 * Pense no que deve ou não ser privado
 * Pense em outras coisas que façam sentido
 * Pense em Pense em outras coisas que façam sentido 
 * para um app de banco e que faça consiga implementar
 */
class Conta {
    #saldo
    constructor() {
        this.conta = parseInt(Math.random()*100000),
        this.agencia = '1234'
        this.#saldo = 0
    }

    get saldo () {
        return this.#saldo;
    }

    depositar (valor) {
        this.#saldo += valor;
        console.log(`${this.nome} Você depositou ${valor} e seu saldo atual é ${this.#saldo}`);
    }

    sacar (valor) {
        if(valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`${this.nome} Você sacou ${valor} e seu saldo atual é ${this.#saldo}!`)
        } else {
            console.log(`Saldo insuficiente, saque não efetuado!`)
        }
    }

    transferir (valor, Conta) {
        if(this.#saldo >= valor){
            this.sacar(valor);
            Conta.depositar(valor);
        } else {
            console.log(`Saldo insuficiente, transferencia não efetuada!`)
        }
    }
}

class Cliente extends Conta{
    #telefone
    #rua
    #bairro
    #cidade
    constructor(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade) {
        super(),
        this.nome = nome,
        this.#telefone = telefone,
        this.#rua = enderecoRua,
        this.#bairro = enderecoBairro,
        this.#cidade = enderecoCidade
    }
}

class pF extends Cliente {
    #cpf
    #rg
    constructor(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade, cpf, rg) {
        super(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade),
        this.#cpf = cpf,
        this.#rg = rg
    }
}

class pJ extends Cliente {
    #cnpj
    constructor(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade, cnpj) {
        super(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade),
        this.#cnpj = cnpj
    }
}

const conta1 = new pF("Marlon", "11 951363201", "Avenida Perimetral, 598", "São Luiz Gonzaga", "Passo Fundo", "00000000000", "12345678910");
console.log(conta1);

conta1.depositar(100);
console.log(conta1.saldo);

conta1.sacar(200);
conta1.sacar(90);
console.log(conta1.saldo);
conta1.depositar(1000);
console.log(conta1.saldo);

const conta2 = new pF("Chico", "11 984458554", "Avenida Bsandeirantes, 158", "Centro", "São Paulo", "00045580000", "12765438910");
conta2.depositar(800);

console.log("Antes do Transferir")
console.log(conta1.saldo);
console.log(conta2.saldo)

conta1.transferir(1500, conta2);
console.log("Depois do Transferir");
console.log(conta1.saldo);
console.log(conta2.saldo)




