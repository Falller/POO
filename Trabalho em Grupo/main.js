function diferencaentredatas(data) {

        const hoje = new Date(); // Data de hoje
        const dataop = new Date(data); // Outra data no passado
        const dife = (hoje.getTime() - dataop.getTime()); // Subtrai uma data pela outra
        const dias = Math.ceil(dife / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

        return dias;
}

console.log(diferencaentredatas('2022-03-31'));