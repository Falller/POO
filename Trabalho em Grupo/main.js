
function intervalo(data){
        let dataVencimento = new Date(data).getTime();
        let dataHoje = new Date().getTime();

        let distancia = dataHoje - dataVencimento ;
        var dias = parseInt(distancia / (1000 * 60 * 60 * 24));
        
        console.log(dias)

}

intervalo("20 Março 2022")
