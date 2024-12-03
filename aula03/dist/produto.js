"use strict";
let produto = {
    nome: "bolacha",
    preco: 2.33,
    categoria: "Alimento",
    disponibilidade: true,
    validade: "12/07/1987",
    codigo_de_barras: "123311122334",
    promocao: true,
    estoque: 2
};
produto.promocao ? console.log(`Promoção inperdivel produto fresquinho: de ${produto.preco} por ${(produto.preco - (produto.preco * 0.012)).toFixed(2)}`) : console.log("Sem promoção");
