enum Status{
    pendente = "Pendente",
    concluido = "Concluído",
    cancelado = "Cancelado"
}



/*
const xmas95 = new Date("1995-12-25T23:15:30");
const hours = xmas95.getHours();

*/
interface Compromisso{
    titulo : String,
    status : Status,
    data : Date,
    hora : Date,
    descricao : String
}




function inserirCompor (titulo : string, status : Status, data : Date, hora : Date, descricao : string){
    let compromisso : Compromisso = {
        titulo : titulo,
        status : status,
        data : data,
        hora : hora,
        descricao : descricao,
    }
    console.log(data.toLocaleTimeString())
    
}


inserirCompor("AA", Status.cancelado, new Date("0001-01-01T23:20:12"), new Date(2024, 10, 6, 15, 30, 0), "AA")