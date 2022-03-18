function qlqcoisa () {
    let num = 1;
    return num.toUpperCase();
}

try {
    //invocando a função
    qlqcoisa();
}
catch(error) {
    console.log("entrei no catch");
    console.log(error);
    console.log(error.message);
    console.log(error.name);
}

function funciona() {
    console.log("Turma 837 Let's Code")
}

try {
    qlqcoisa();
    console.log("Dando Sequência no código")
}
catch (err){
    console.log(err)
}

try {
    console.log("mesmo o try acima dando erro este funciona")
    funciona();
}

catch(error) {
    console.log(error)
}

try {
    qlqcoisa();
    console.log("Dando Sequência no código")
}
catch (err){
    console.log(err)
}
finally {
    console.log("Final do try ou do catch")
}

function ValidaErro(mensagemErro) {
    this.erro = mensagemErro;
}

function validaString(nome) {
    try {
        if(typeof nome !== 'string') {
            //throw é uma declaração que lanca
            throw new ValidaErro("Erro no formato")
        } else {
            console.log(`Olá ${nome}`)
        }
    }
    catch(e) {
        console.log(e.erro)
    }
}

validaString(1)



