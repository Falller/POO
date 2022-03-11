/**
 * Crie um objeto de nome Ave e adicione um atributo de nome espécie.

Dentro do objeto Ave crie uma função, que retorno o atributo espécie.

Retorne o objeto invocando a função criada.

Após o retorno do objeto invocando a função, crie um objeto de nome Peixe e através do bind faça ele retornar a espécie do objeto peixe.

 */

const ave = {
    especie: "XPTO_AVE",

    retornaespecie: function () {
        return this.especie;
    }
}

const especieAve = ave.retornaespecie();
console.log(especieAve);

const peixe = {
    especie: "XPTO_PEIXE",
}

const especiePeixe = ave.retornaespecie.bind(peixe)();
console.log(especiePeixe);

