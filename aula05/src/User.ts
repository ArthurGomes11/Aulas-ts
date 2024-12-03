import { Role } from "./Role";
import { v4 as uuidv4 } from "uuid";
export interface User {
    id: string,
    nome : string
    role : Role
}


export function criarUsuario(nome: string, role: Role){
    return{
        id: uuidv4(),
        nome,
        role
    };
}

export function filtorporRole(usuarios: User[], role: Role): User[] {
    return usuarios.filter((user) => user.role === role);
  }