import { Usuario } from "./Usuario";

export class Admin extends Usuario {
    constructor(nome: string, cpf: string, senha: string) {
        super(nome, cpf, senha)
    }


}