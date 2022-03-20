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


//PARTE 2
/**
 * No cliente pessoa física, criar um método
onde retorna os dados de rg e cpf.
No cliente pessoa juridica, criar um método
onde retorna os dados do cnpj

Utilize o conceito de Polimorfismo para execução da solicitação acima


Crie uma Objeto Lançamentos 
e para cada operação de saque ou depósito
Insira os seguintes registros nessa classe:
  - Nome do Cliente
  - Tipo da Operação (se foi saque ou se foi depósito)
  - Valor
  - Horario da Transação
Considerando o conceito de encapsulamento
deixe o saldo bancário do cliente inacessível fora do escopo de conta.
Lembre-se apenas o escopo de conta poderá movimentar o saldo bancário.

Crie um método que calcule o juros de atraso 
de um determinado pgto, onde tenha as seguintes regras: 
- Atraso de 1 dia juros de 1%
- Atraso de 2 dias juros 2.5 % 
- Atraso de 3 dias ou mais, juros composto 2.5%
 */
// EXERCÍCIO PARTE 3
/**
 * - Crie um método de Leasing para o cliente
considerando as seguintes condições:
- Se cliente PJ, considerar Juros diário de 1%
- Se cliente PF, considerar juros diário de 0.5 %

- Sempre que o usuário for fazer um saque, pagar uma conta, ou realizar 
transferência e o saldo disponível em conta for menor que o valor da operação,  
verificar se o mesmo quer fazer uso do Leasing, se sim, liberar o saque e informar o 
valor negativo e a taxa de juros a ser aplicada.
- Implementar um método que calcule e armazene o saldo do juros do leasing da conta, 
sendo separado por data, para ser possível ver o quanto de juros de leasing o cliente 
esta acumulando diariamente.
[Saldo negativo:
Juros Diário:
Data:
Juros Total Acumulado:]

OBS: Sempre que o cliente entrar no cheque especial o metodo precisa ser invocado

- Crie um método que irá verificar se o cliente está com cheque especial, 
e se ocorrer um depósito em conta, é necessário abater o valor do cheque especial

 */

const lancamentos = [];


class Conta {
    #saldo
    constructor() {
        this.conta = parseInt(Math.random()*100000),
        this.agencia = '1234'
        this.#saldo = 0
    }

    get saldo () {
        return `Seu saldo é ${this.#saldo.toFixed(2)}`;
    }

    geraDados (nomeop, tipoop,valorop) {
        const tra1 = {
            nome: nomeop,
            tipo: tipoop,
            valor: valorop,
            horario: new Date
        }
        return tra1;
    }
     

    depositar (valor) {
        this.#saldo += valor;
        console.log(`${this.nome} Você depositou ${valor} e seu saldo atual é ${this.#saldo}`);

        let transacao = this.geraDados(this.nome, "Depósito", valor)

        lancamentos.push(transacao);

    }

    sacar (valor) {
        if(valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`${this.nome} Você sacou ${valor} e seu saldo atual é ${this.#saldo}!`);

            let transacao = this.geraDados(this.nome, "Saque", valor)

            lancamentos.push(transacao);


        } else {
            this.leasing();
            if(this.leasing = true) {
                this.#saldo -= valor;
                console.log(`${this.nome} Você sacou ${valor} e seu saldo atual é ${this.#saldo}!`);
    
                let transacao = this.geraDados(this.nome, "Saque", valor)
    
                lancamentos.push(transacao);    
            } else if(this.leasing = false){
                console.log(`Saldo insuficiente e vc não quis usar seu CHEQUE ESPECIAL, saque não efetuado!`)
            }

//            console.log(`Saldo insuficiente, saque não efetuado!`)
        }

    }

    transferir (valor, Conta) {
        if(this.#saldo >= valor){
            this.sacar(valor);
            Conta.depositar(valor);

            let transacao = this.geraDados(this.nome, "Transferência", valor)

            lancamentos.push(transacao);

        } else {
            this.leasing();
            if(this.leasing == true) {
                this.sacar(valor);
            Conta.depositar(valor);

            let transacao = this.geraDados(this.nome, "Transferência", valor)

            lancamentos.push(transacao);    
            } else {
                console.log(`Saldo insuficiente e vc não quis usar seu CHEQUE ESPECIAL, Transferência não efetuado!`)
            }
//            console.log(`Saldo insuficiente, transferencia não efetuada!`)
        }

    }
    
    pagar (valor, dataVencimento) {

        console.log("Cheguei no pagar")

        const taxa1dia = 0.01;
        const taxa2dia = 0.025;
        const taxa3dia = 0.025;
        const nDias = 0 - dataVencimento;
//        const nDias = new Date - dataVencimento;
        if(this.#saldo >= valor){
            if(nDias == 1){
                valor += valor * taxa1dia;
                this.#saldo -= valor;
                console.log(`Vc pagou ${valor} com juros de 1 dia`)
            } else if (nDias == 2) {
                valor += valor * taxa2dia;
                this.#saldo -= valor;
                console.log(`Vc pagou ${valor} com juros de 2 dias`)
            } else if (nDias >= 3) {

                for (let cont = 1; cont <= nDias; cont++) {
                    valor += valor *taxa3dia;
                    console.log(`Valor: ${valor}`)
                }
                console.log(`Vc pagou ${valor} com juros compostos de 3 dias ou mais`)
                //valor += valor * taxa1dia;
                //valor += valor * taxa2dia;
                //valor += valor * taxa1dia;
                this.#saldo -= valor;
            } else {
                this.#saldo -= valor;
                console.log(`Vc pagou ${valor} SEM juros!`)
            }

        } else {
            this.leasing();
            if(this.leasing == true) {
                if(nDias == 1){
                    valor += valor * taxa1dia;
                    this.#saldo -= valor;
                    console.log(`Vc pagou ${valor} com juros de 1 dia`)
                    
                    let transacao = this.geraDados(this.nome, "Transferência", valor)

                    lancamentos.push(transacao);

                } else if (nDias == 2) {
                    valor += valor * taxa2dia;
                    this.#saldo -= valor;
                    console.log(`Vc pagou ${valor} com juros de 2 dias`)

                    let transacao = this.geraDados(this.nome, "Transferência", valor)

                    lancamentos.push(transacao);

                } else if (nDias >= 3) {
    
                    for (let cont = 1; cont <= nDias; cont++) {
                        valor += valor *taxa3dia;
                        console.log(`Valor: ${valor}`)
                    }
                    console.log(`Vc pagou ${valor} com juros compostos de 3 dias ou mais`)
                    //valor += valor * taxa1dia;
                    //valor += valor * taxa2dia;
                    //valor += valor * taxa1dia;
                    this.#saldo -= valor;   
                    
                    let transacao = this.geraDados(this.nome, "Transferência", valor)

                    lancamentos.push(transacao);
                } else {
                console.log(`Saldo insuficiente e vc não quis usar seu CHEQUE ESPECIAL, Pagamento de conta não efetuada não efetuado!`)
                }
            }
        }   
    }

    leasing() {

        let leasing = prompt(`${this.nome} Seu saldo não é suficiente para efetuar essa transação. Você quer usar o cheque especial? [S/N]`);
        if(leasing === "S" || leasing === "s") {
            console.log("Cliente respondeu SIM e vai usar o CHEQUE ESPECIAL");
            return true;
        } else if (leasing === "N" || leasing === "n") {
            console.log("Cliente respondeu NÃO");
            return false;
        } else {
            console.log("Cliente respondeu ERRADO");
            this.leasing();
        }

        return leasing;
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

    get telefone () {
        return this.#telefone
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

    dados () {
        return `
        Nome: ${this.nome} 
        CPF: ${this.#cpf}
        RG: ${this.#rg}
        Conta: ${this.conta}
        Agência: ${this.agencia}`
    }


}

class pJ extends Cliente {
    #cnpj
    constructor(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade, cnpj) {
        super(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade),
        this.#cnpj = cnpj
    }

    dados () {
        return `
        Nome: ${this.nome}
        CPNJ: ${this.#cnpj}
        Conta: ${this.conta}
        Agência: ${this.agencia}`
    }

}
/** 
const conta1 = new pF("Marlon", "11 951363201", "Avenida Perimetral, 598", "São Luiz Gonzaga", "Passo Fundo", "000.000.000-00", "12345678910");
console.log(conta1);

conta1.depositar(10000);
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
console.log(conta2.saldo);

console.log(conta1.dados());

console.log(lancamentos);

conta1.pagar(200, -3);
console.log(conta1.saldo);

conta1.pagar(200, -2);
console.log(conta1.saldo);

conta1.pagar(200, -1);
console.log(conta1.saldo);

conta1.pagar(200, 0);
console.log(conta1.saldo);

conta1.pagar(200, -10);
console.log(conta1.saldo);

conta1.pagar(200, 5);
console.log(conta1.saldo);

conta1.leasing();

*/
const conta1 = new pF("CONTA1", "11 951363201", "Avenida Perimetral, 598", "São Luiz Gonzaga", "Passo Fundo", "000.000.000-00", "12345678910");
console.log(conta1);

const conta2 = new pF("CONTA2", "11 984458554", "Avenida Bsandeirantes, 158", "Centro", "São Paulo", "00045580000", "12765438910");
console.log(conta1);

conta1.depositar(1000);
console.log(conta1.saldo);
conta2.depositar(100);
console.log(conta2.saldo);

conta1.sacar(200);
console.log(conta1.saldo);
conta2.sacar(200);
console.log(conta2.saldo);

console.log("FIM DOS TESTES DO SACAR")

console.log("Antes do Transferir")
console.log(conta1.saldo);
console.log(conta2.saldo)

conta1.transferir(1500, conta2);
console.log("Depois do Transferir");
console.log(conta1.saldo);
console.log(conta2.saldo);












