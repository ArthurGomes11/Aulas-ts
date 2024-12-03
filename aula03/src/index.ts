interface Aluno {
    nome: string,
    idade: number,
    matriculado: boolean,
    pcd?: boolean,
    endereco: {
        logadouro: string,
        numero: string,
        bairro: string,
        cidade: string,
        estado: string
    }
    disciplina: string[]
}

let novoAluno: Aluno = {
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
}

novoAluno.matriculado ? console.log("Matriculado: sim") : console.log("Matriculado: não")

console.log(novoAluno.disciplina[0])
