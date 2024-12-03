"use strict";
/*

2) Gerenciamento de Produtos
Crie uma lista de produtos e exiba-os formatados.
Defina uma interface Produto com os campos id, nome e preço.
Crie um array de produtos.
Use o método forEach para exibir cada produto no formato: "Produto: Nome (R$ Preço)".


*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const uuid_1 = require("uuid");
console.log(chalk_1.default.bold("AAAAAAA"));
function criarProduto(nome, preco) {
    return {
        id: (0, uuid_1.v4)(),
        nome,
        preco
    };
}
const produtos = [
    criarProduto("Arroz", 50),
    criarProduto("Feijão", 30)
];
/*

produtos.forEach((produtos) =>{
    console.log(chalk.blue(`Produto: ${produtos.nome} R$ ${produtos.preco}`))
});

*/ 
