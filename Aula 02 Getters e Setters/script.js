var variavel = {
    valor: 0,
    conversor: '',
    get moeda () {
        return "R$" + this.valor.toFixed(2).replace(".",",");
    },
    
    get xpto () {
        return this.valor
    },

    set xpto(i) {
        console.log("ESTOU AQUI NO SET")
        this.valor = i;
    },

    get conversao () {
        if(this.conversor === 'peso') {
            return 0.046 * this.valor;
        }
    },

}

variavel.xpto = 150;
variavel.conversor = "peso";

console.log(variavel.conversao);
console.log(variavel.moeda);

