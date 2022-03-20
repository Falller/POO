const extrato = []; //array com objetos das movimentações

function diferencaentredatas(data1, data2) {

    const hoje = new Date(data1); // Data de hoje
    const dataop = new Date(data2); // Outra data no passado
    const dife = (hoje.getTime() - dataop.getTime()); // Subtrai uma data pela outra
    const dias = Math.floor(dife / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
//console.log("data passada: " + data1);
//console.log("data passada diferente " + dataop);
//console.log("hoje: " + hoje)
//console.log("dataop.getTime() " + dataop.getTime())
//console.log("hoje.getTime() " + hoje.getTime())


    return dias;
}

class Conta {
    #saldo
    #chequeespecial
    #datale
    constructor() {
        this.conta = parseInt(Math.random()*100000),
        this.agencia = 1234
        this.#saldo = 0
        this.#chequeespecial = 0
        this.#datale = ""
        this.jurosle = 0
    }

    get saldo () {
        return this.#saldo.toFixed(2);
    }

    set saldo(valor) {
        this.#saldo += valor;
    }

    get chequeespecial() {
        return this.#chequeespecial.toFixed(2)
    }

    set chequeespecial(valor) {
        this.#chequeespecial = valor;
    }

    get datale() {
        return this.#datale;
    }

    set datale(data) {
        this.#datale = new Date(data)
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

    depositar(valor, data = new Date()) {
        this.#saldo += valor; //faz o depósito
        console.log(`${this.nome} Você depositou R$ ${valor.toFixed(2)} e seu saldo atual é R$ ${this.#saldo}`);// mostra a mensagem do valor do depósito

        let transacao = this.geraDados(this.nome, "Depósito", valor.toFixed(2)) //cria um objeto com os dados da operação

        extrato.push(transacao);//add o objeto no array extrato
    }

    saque(valor, data = new Date()) {
        this.#saldo -= valor; //faz o saque
        console.log(`${this.nome} Você sacou R$ ${valor.toFixed(2)} e seu saldo atual é R$ ${this.#saldo.toFixed(2)}!`); //mostra a mensagem do valor do saque

        let transacao = this.geraDados(this.nome, "Saque", valor.toFixed(2)) //cria um objeto com os dados da operação

        extrato.push(transacao); //add o objeto no array extrato
    }

    transferencia(valor, conta, data = new Date()) {
        this.#saldo -= valor; //faz o saque
        conta.#saldo += valor //faz o depósito na conta do beneficiario
        console.log(`${this.nome} Você transferiu R$ ${valor} para ${conta.nome} seu saldo atual é R$ ${this.#saldo} e o saldo de ${conta.nome} é R$ ${conta.saldo}!`); //mostra a mensagem do valor da transferência

        let transacao = this.geraDados(this.nome, "Transferência Saída", valor.toFixed(2));//cria obejeto com os dados de saída
        extrato.push(transacao); //add no array

        transacao = this.geraDados(conta.nome, "Transferência Entrada", valor.toFixed(2));//cria obejeto com os dados de entrada
        extrato.push(transacao); // add objeto no array
    }

    pagamento(valor, dataVencimento, data = new Date()) {
        const taxa1dia = 0.01;
        const taxa2dia = 0.025;
        const taxa3dia = 0.025;
        const nDias = diferencaentredatas(data, dataVencimento) - 0;
//      const nDias = new Date - dataVencimento;

        if(nDias == 1){
            valor += valor * taxa1dia;
            this.#saldo -= valor;
            console.log(`Vc pagou R$ ${valor.toFixed(2)} com juros de ${nDias} dia de atraso! Seu saldo atual é R$ ${this.#saldo}`)

            let transacao = this.geraDados(this.nome, "Pagamento de Contas", valor.toFixed(2));//cria obejeto com os dados de saída
            extrato.push(transacao); //add no array
        } else if (nDias == 2) {
            valor += valor * taxa2dia;
            this.#saldo -= valor;
            console.log(`Vc pagou R$ ${valor.toFixed(2)} com juros de ${nDias} dias de atraso! Seu saldo atual é R$ ${this.#saldo}`)

            let transacao = this.geraDados(this.nome, "Pagamento de Contas", valor.toFixed(2));//cria obejeto com os dados de saída
            extrato.push(transacao); //add no array

        } else if (nDias >= 3) {
            for (let cont = 1; cont <= nDias; cont++) {
                valor += valor *taxa3dia;
                console.log(`Valor: ${valor.toFixed(2)} dia ${cont}`)
            }
            this.#saldo -= valor;
            console.log(`Vc pagou R$ ${valor.toFixed(2)} com juros compostos de ${taxa3dia*100} por ${nDias} dias de atraso! Seu saldo atual é R$ ${this.#saldo.toFixed(2)}`)

            let transacao = this.geraDados(this.nome, "Pagamento de Contas", valor.toFixed(2));//cria obejeto com os dados de saída
            extrato.push(transacao); //add no array
            
        } else {
            this.#saldo -= valor;
            console.log(`Vc pagou R$ ${valor.toFixed(2)} SEM juros! Seu saldo atual é R$ ${this.#saldo.toFixed(2)}`)

            let transacao = this.geraDados(this.nome, "Pagamento de Contas", valor.toFixed(2));//cria obejeto com os dados de saída
            extrato.push(transacao); //add no array
        }
    }

    testeleasing() {

        let retorno = "";
        let leasing = prompt(`${this.nome} Seu saldo não é suficiente para efetuar essa transação. Você quer usar o cheque especial? [S/N]`);
        if(leasing === "S" || leasing === "s") {
            console.log("Cliente respondeu SIM e vai usar o CHEQUE ESPECIAL");
            retorno = true;
        } else if (leasing === "N" || leasing === "n") {
            console.log("Cliente respondeu NÃO");
            retorno = false;
        } else {
            console.log("Cliente respondeu ERRADO");
            this.leasing();
        }
        return retorno;
    }

    sacar(valor, data = new Date()) {
        if(valor <= this.#saldo) {
            this.saque(valor);
        } else{
            let volta = this.testeleasing();
            
            if(volta) {
                this.saque(valor);
                this.calculoLeasing(data);
            } else {
                console.log(`Saldo insuficiente e vc não quis usar seu CHEQUE ESPECIAL, SAQUE não efetuado!`)
            }
        }
    }

    transferir(valor, conta, data = new Date()) {
        if(valor <= this.#saldo) {
            this.transferencia(valor, conta);
        } else{
            let volta = this.testeleasing();
            
            if(volta) {
                this.transferencia(valor, conta);
                this.calculoLeasing(data);
            } else {
                console.log(`Saldo insuficiente e vc não quis usar seu CHEQUE ESPECIAL, TRANSFERÊNCIA não efetuada!`)
            }
        }
    }

    pagar(valor, dataVencimento, data = new Date()) {
        if(valor <= this.#saldo) {
            this.pagamento(valor, dataVencimento);
        } else{
            let volta = this.testeleasing();
            
            if(volta) {
                this.pagamento(valor, dataVencimento);
                this.calculoLeasing(data);
            } else {
                console.log(`Saldo insuficiente e vc não quis usar seu CHEQUE ESPECIAL, PAGAMENTO não efetuado!`)
            }
        }
    }

    calculoLeasing(dataLeasing) {
        this.#chequeespecial = this.#saldo-0;
        this.datale = dataLeasing;
        return console.log("Cheque Especial R$ " + this.chequeespecial);
    }
    
}

class Cliente extends Conta{
    #telefone
    #rua
    #bairro
    #cidade
    #cep
    constructor(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade, cep) {
        super(),
        this.nome = nome,
        this.#telefone = telefone,
        this.#rua = enderecoRua,
        this.#bairro = enderecoBairro,
        this.#cidade = enderecoCidade,
        this.#cep = cep
    }
}

class pF extends Cliente {
    #cpf
    #rg
    constructor(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade, cep, cpf, rg) {
        super(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade, cep),
        this.#cpf = cpf,
        this.#rg = rg
        this.taxaLeasing = 0.005;
    }

    dados () {
        return `
        Nome: ${this.nome} 
        CPF: ${this.#cpf}
        RG: ${this.#rg}
        Conta: ${this.conta}
        Agência: ${this.agencia}`
    }

    consultaLeasing(data) {

        if(this.chequeespecial >= 0){
            console.log(`O cliente ${this.nome} não está usando o CHEQUE ESPECIAL no momento!`)
        } else {
            const diasusandochequeespecial = diferencaentredatas(data, this.datale);
            const taxapf = 0.005
            
            for (let cont = 1; cont <= diasusandochequeespecial; cont++) {
                this.jurosle += this.chequeespecial * taxapf;
                console.log(`Dia ${cont}: Valor de Juros até aqui R$ ${this.jurosle.toFixed(2)}`)
            }

            this.saldo = this.jurosle;
            console.log(`
            Nome: ${this.nome} \n
            Saldo: R$ ${this.saldo} \n
            Início do Uso do Cheque Especial: ${this.datale} \n
            Data da Consulta: ${data} \n
            Dias no Cheque Especial: ${diasusandochequeespecial} \n
            Juros Pagos até Hoje no Cheque Especial: R$ ${this.jurosle.toFixed(2)}
            `)
        }

    }
}

class pJ extends Cliente {
    #cnpj
    constructor(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade, cep, cnpj) {
        super(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade, cep),
        this.#cnpj = cnpj
        this.taxaLeasing = 0.01;
    }

    dados () {
        return `
        Nome: ${this.nome}
        CPNJ: ${this.#cnpj}
        Conta: ${this.conta}
        Agência: ${this.agencia}`
    }

    consultaLeasing(data) {

        if(this.chequeespecial >= 0){
            console.log(`O cliente ${this.nome} não está usando o CHEQUE ESPECIAL no momento!`)
        } else {
            const diasusandochequeespecial = diferencaentredatas(data, this.datale);
            const taxapj = 0.01
            
            for (let cont = 1; cont <= diasusandochequeespecial; cont++) {
                this.jurosle += this.chequeespecial * taxapj;
                console.log(`Dia ${cont}: Valor de Juros até aqui R$ ${this.jurosle.toFixed(2)}`)
            }

            this.saldo = this.jurosle; //faz a soma do saldo com o juros
            console.log(`
            Nome: ${this.nome} \n
            Saldo: R$ ${this.saldo} \n
            Início do Uso do Cheque Especial: ${this.datale} \n
            Data da Consulta: ${data} \n
            Dias no Cheque Especial: ${diasusandochequeespecial} \n
            Juros Pagos até Hoje no Cheque Especial: R$ ${this.jurosle.toFixed(2)}
            `)
        }   
    }
}

const conta1 = new pF("CONTA 1", "11 951363201", "Avenida Perimetral, 598", "São Luiz Gonzaga", "Passo Fundo", "99054-080", "000.000.000-00", "12345678910");
console.log(`${conta1.dados()} \nSaldo: R$ ${conta1.saldo}`);

const conta2 = new pF("CONTA 2", "11 984458554", "Avenida Bsandeirantes, 158", "Centro", "São Paulo","99500-48", "000.455.800-00", "12765438910");
console.log(`${conta2.dados()} \nSaldo R$ ${conta2.saldo}`);

const conta3 = new pJ("CONTA PJ1", "54 981358415", "Avenida Perimetral, 598", "São Luiz Gonzaga", "Passo Fundo", "99054-080", "43.827.253/0001-46");
console.log(`${conta3.dados()} \nSaldo: R$ ${conta3.saldo}`);

conta1.depositar(4000);
conta1.transferir(2000, conta2);

conta1.pagar(2001, "2022-03-09")
// falta verificação de contas atrasadas que ficaria negativo

//conta1.sacar(5000);
//conta2.saque(1500);

conta1.consultaLeasing("2022/03/31")
conta3.consultaLeasing("2022/03/31")
conta2.consultaLeasing("2022/03/31")




//console.log(diferencaentredatas(this.datale, "2022/03/21"))
//console.table(extrato);
//console.log(diferencaentredatas("2022/03/10"))
//console.log(new Date)