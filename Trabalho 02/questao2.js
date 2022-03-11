/**
 * Faça um objeto TV com as propriedades canal, volume e ligada e métodos liga, desliga, mudaDeCanal e aumentaVolume, diminuiVolume.
 */

const TV = {
    _canal: "Globo",
    _volume: 20,
    _ligada: true,

    liga: function () {
        return this._ligada = true;
    },

    desliga: function () {
        return this._ligada = false;
    },

    mudaCanal: function (canal) {
        return this._canal = canal;
    },

    aumentaVolume: function () {
        return this._volume++;
    },

    diminuiVolume: function () {
        return this._volume--;
    }
}

console.log("TV Inicializada");
console.log(TV);

//muda canal
console.log("Muda Canal");
TV.mudaCanal("Band");
console.log(TV);

//diminui volume
console.log("Diminui Volume 1 vez");
TV.diminuiVolume();
console.log(TV);

//aumenta volume
console.log("Aumenta Volume 3 vezes");
TV.aumentaVolume();
TV.aumentaVolume();
TV.aumentaVolume();
console.log(TV);

// desliga TV
console.log("Desliga TV")
TV.desliga();
console.log(TV);

// liga tv
console.log("Liga TV")
TV.liga();
console.log(TV);

