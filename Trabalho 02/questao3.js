/**
 * Refaça o exercício da TV utilizando uma função construtora

Refaça o exercício da TV utilizando a sintaxe de classe (class).

 */

// funcão construtora

function TV(canal, volume, ligada) {
    this._canal = canal;
    this._volume = volume;
    this._ligada = ligada;

    this.liga =  function () {
        return this._ligada = true;
    };

    this.desliga = function () {
        return this._ligada = false;
    };

    this.mudaCanal = function (canal) {
        return this._canal = canal;
    };

    this.aumentaVolume = function () {
        return this._volume++;
    };

    this.diminuiVolume = function () {
        return this._volume--;
    }

}

// cria Objeto
const TVConstrutora = new TV("Globo", 15, true);
console.log("Inicia TV");
console.log(TVConstrutora);

// aumenta volume
console.log("Aumenta Volume 2 vezes");
TVConstrutora.aumentaVolume();
TVConstrutora.aumentaVolume();
console.log(TVConstrutora);

// diminui volume
console.log("Diminui Volume 1 vez")
TVConstrutora.diminuiVolume();
console.log(TVConstrutora);

// muda canal
console.log("Muda Canal")
TVConstrutora.mudaCanal("SBT");
console.log(TVConstrutora);

// desliga TV
console.log("Desliga TV")
TVConstrutora.desliga();
console.log(TVConstrutora);

// liga TV
console.log("Liga TV")
TVConstrutora.liga();
console.log(TVConstrutora);


// Objeto com Classes
console.log("Abaixo é com Classes");

class _TVClasse {
    constructor(canal, volume, ligada) {
        this._canal = canal;
        this._volume = volume;
        this._ligada = ligada;
    }

    set mudaCanal (canal) {
        return this._canal = canal;
    }

    liga () {
        return this._ligada = true;
    }

    desliga () {
        return this._ligada = false;
    }

    aumentaVolume () {
        return this._volume++;
    }

    diminuiVolume () {
        return this._volume--;
    }

    get infos () {
        return "Canal: " + this._canal + "/ Volume: " + this._volume + "/ Ligada? " + this._ligada;
    }
}

// instancia Objeto TV
console.log("Inicia TV")
const TVClasse = new _TVClasse("Record", 25, true);
console.log(TVClasse.infos);

// aumenta volume
console.log("Aumenta Volume 2 vezes");
TVClasse.aumentaVolume();
TVClasse.aumentaVolume();
console.log(TVClasse.infos);

// diminui volume
console.log("Diminui Volume 1 vez")
TVClasse.diminuiVolume();
console.log(TVClasse.infos);

// muda canal
console.log("Muda Canal")
TVClasse.mudaCanal = "RBS";
console.log(TVClasse.infos);

// desliga TV
console.log("Desliga TV")
TVClasse.desliga();
console.log(TVClasse.infos);

// liga TV
console.log("Liga TV")
TVClasse.liga();
console.log(TVClasse.infos);
