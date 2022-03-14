/**
 * Crie uma classe Restaurante com as propriedades cidade, delivery (verdadeiro ou falso), pedidosPendentes e tempo de entrega estimado (calculado com base nos pedidos pendentes, sendo 10 + 2 * pedidosPendentes em minutos). Os restaurantes devem ser capazes de realizar entregas desde que o cliente esteja localizado na mesma cidade e, para isso, precisamos de um método entregaPedido que devolve como resultado se é possível realizar a entrega para um determinado cliente ou não e, em caso positivo, o tempo estimado de entrega.
 */

class Restaurante {
    #cidade
    #delivery
    #pedidospendentes
    #tempodeentregaestimado
    constructor (cidade, delivery = false) {
        this.#cidade = cidade,
        this.#delivery = delivery,
        this.#pedidospendentes = 0,
        this.#tempodeentregaestimado = 0
    }

    get pedidosPendentes () {
        return this.#pedidospendentes;
    }


    entregaPedido (cidadeCliente) {
        if(this.#delivery) {
            if(this.#cidade == cidadeCliente) {
                this.#pedidospendentes++;
                this.#tempodeentregaestimado = 10 + (2 * this.#pedidospendentes)
                return `Sua entrega será feita em prazo estimado de ${this.#tempodeentregaestimado} minutos!`
            } else {
                return `Esse Restaurante não atende a sua cidade!`
            }

        } else {
            return `Esse Restaurante não faz delivery!`
        }

    }

}


const r1 = new Restaurante("Passo Fundo", true);

//console.log(r1.entregaPedido("Marau"));
console.log(r1.entregaPedido("Passo Fundo"))
console.log(r1.pedidosPendentes);
//console.log(r1.entregaPedido("Marau"));
console.log(r1.entregaPedido("Passo Fundo"))
console.log(r1.pedidosPendentes);
//console.log(r1.entregaPedido("Marau"));
console.log(r1.entregaPedido("Passo Fundo"))
console.log(r1.pedidosPendentes);
//console.log(r1.entregaPedido("Marau"));
console.log(r1.entregaPedido("Passo Fundo"))
console.log(r1.pedidosPendentes);

const r2 = new Restaurante("Marau", false);
console.log(r2.entregaPedido("Marau"));
console.log(r2.entregaPedido("Passo Fundo"))
