"use strict";
let novoAluno = {
    nome: "Marco",
    idade: 40,
    matriculado: false,
    endereco: {
        logadouro: "Avenida Josato",
        numero: "2130",
        bairro: "Bela vista",
        cidade: "Vilhena",
        estado: "RO"
    },
    disciplina: ["POO", "JS"]
};
novoAluno.matriculado ? console.log("Matriculado: sim") : console.log("Matriculado: não");
console.log(novoAluno.disciplina[0]);
