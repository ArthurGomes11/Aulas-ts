/*

2) Gerenciamento de Produtos
Crie uma lista de produtos e exiba-os formatados.
Defina uma interface Produto com os campos id, nome e preço.
Crie um array de produtos.
Use o método forEach para exibir cada produto no formato: "Produto: Nome (R$ Preço)".


*/

import * as chalk from "chalk";
import { v4 as uuidv4 } from "uuid";
console.log("AAAAAAA")


function criarProduto(nome : string, preco : number ){
    return{
        id: uuidv4(),
        nome,
        preco
    }
}

interface Produto {
    id: string,
    nome: string,
    preco: number
}


const produtos = [
    criarProduto("Arroz", 50),
    criarProduto("Feijão", 30)
] 
/*

produtos.forEach((produtos) =>{
    console.log(chalk.blue(`Produto: ${produtos.nome} R$ ${produtos.preco}`))
});

*/