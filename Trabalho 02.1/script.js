/**
 * Crie uma classe CNH que tenha como propriedades país e idade que, por padrão, deve ser maior ou igual a 18, 16 se for igual a US ou CA e 21 se corresponder a CH ou RU. Se o país for BR deve também ser informada a categoria da carteira (A, B, C, D, E, AB, AC, AD ou AE).
 */

class _CNH {
    constructor(pais) {
        this._pais = pais;
        this._idade = "";

        if (this._pais == "US" || this._pais == "CA") {
            this._idade = 16;
        } else if (this._pais == "CH" || this._pais == "RU") {
            this._idade = 21;
        }
    }
}

class _CNHBrasil extends _CNH {
    constructor (pais, categoria) {
        super(pais)
        this._categoria = categoria;
        this._idade = 18;
    }
}

const CNH = new _CNH("RU");
console.log(CNH)

const CNHBrasil = new _CNHBrasil("BR", "A");
console.log(CNHBrasil);
