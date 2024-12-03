"use strict";
var Status;
(function (Status) {
    Status["pendente"] = "Pendente";
    Status["concluido"] = "Conclu\u00EDdo";
    Status["cancelado"] = "Cancelado";
})(Status || (Status = {}));
let compromissos;
function inserirCompor(titulo, status, data, hora, descricao) {
    let compromisso = {
        titulo: titulo,
        status: status,
        data: data,
        hora: hora,
        descricao: descricao,
    };
    console.log(data.toLocaleTimeString());
}
inserirCompor("AA", Status.cancelado, new Date("0001-01-01T23:20:12"), new Date(2024, 10, 6, 15, 30, 0), "AA");
