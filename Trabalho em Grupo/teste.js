function intervalo(data){
    let dataVencimento = new Date(data).getTime();
    let dataHoje = new Date().getTime();

    let distancia = dataHoje - dataVencimento ;
    var dias = parseInt(distancia / (1000 * 60 * 60 * 24));
    
    console.log(dias)
}

intervalo("17 Março 2022")

var date1 = new Date("7/11/2010");
var date2 = new Date("12/12/2010");
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 


console.log(`date1 = ${date1}`);
console.log(`date2 = ${date2}`);
console.log(`timeDiff = ${timeDiff}`);
console.log(`diffDays = ${diffDays}`);