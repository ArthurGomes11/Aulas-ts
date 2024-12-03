
/*Exercícios para o dia 25/11/2024
1) Gerenciamento de Usuários
Crie uma aplicação que gerencie usuários e seus papéis (roles).
Crie um enum Role com os valores: ADMIN, USER, GUEST.
Defina uma interface User com os campos: id, nome, role.
Utilize UUID para gerar o id.
Crie uma função que receba um array de usuários e filtre apenas os usuários com um determinado papel.
Obs.: utilize arquivos separados para implementar o exercícios.

 */

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

import { criarUsuario, User } from "./User";
import { Role } from "./Role";
import { filtorporRole } from "./User"
const Usuarios=[
    criarUsuario("Arthur", Role.ADMIN),
    criarUsuario("Bianca", Role.ADMIN),
    criarUsuario("Miguel", Role.USER)
]

const usuariosfiltrados = (filtorporRole(Usuarios, Role.ADMIN))
console.log(usuariosfiltrados)

