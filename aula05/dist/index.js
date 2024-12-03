"use strict";
/*Exercícios para o dia 25/11/2024
1) Gerenciamento de Usuários
Crie uma aplicação que gerencie usuários e seus papéis (roles).
Crie um enum Role com os valores: ADMIN, USER, GUEST.
Defina uma interface User com os campos: id, nome, role.
Utilize UUID para gerar o id.
Crie uma função que receba um array de usuários e filtre apenas os usuários com um determinado papel.
Obs.: utilize arquivos separados para implementar o exercícios.

 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarUsuario = criarUsuario;
exports.filterUsersByRole = filterUsersByRole;
/*import { v4 as uuidv4 } from "uuid"; // Instale o pacote uuid: npm install uuid
import { User } from "./User";
import { Role } from "./Role";

// Função para criar um usuário
export function createUser(name: string, role: Role): User {
  return {
    id: uuidv4(),
    name,
    role,
  };
}

// Função para filtrar usuários por papel (role)
export function filterUsersByRole(users: User[], role: Role): User[] {
  return users.filter((user) => user.role === role);
}
 */
const uuid_1 = require("uuid");
const Role_1 = require("./Role");
function criarUsuario(nome, role) {
    return {
        id: (0, uuid_1.v4)(),
        nome,
        role
    };
}
function filterUsersByRole(users, role) {
    return users.filter((user) => user.role === role);
}
criarUsuario("Arthur", Role_1.Role.ADMIN);
