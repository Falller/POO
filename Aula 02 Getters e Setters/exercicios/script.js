/**
 * Construa um objeto do tipo Carro que contenha os seguintes atributos: 
  - cor
  - marca

Insira a cor do carro utilizando getter e setter;
Insira a marca do carro utilizando getter e setter;

Crie um get que retorne uma mensagem informando a marca e a cor do carro.
 */

const carro = {

    set insereMarca (marca) {
        this.marca = marca;
    
    },

    get insereMarca () {
        return this.marca
    },

    set insereCor (cor) {
        this.cor = cor;
    },

    get insereCor () {
        return this.cor
    },

    get mensagem () {
        return "A marca do carro é " + this.marca + " e sua cor é " + this.cor;
    }
}

carro.insereMarca = "Honda";
carro.insereCor = "Preto";

console.log(carro.insereMarca);
console.log(carro.insereCor);
console.log(carro.mensagem);