import { IUsuario } from "../interface/IUsuario";

export class Usuario implements IUsuario {
    nome: string
    readonly cpf: string
    senha: string

    constructor(nome: string, cpf: string, senha: string) {
        this.nome = nome
        this.cpf = cpf
        this.senha = senha
    }

    navegar(){
        console.log(`O usuario ${this.nome} esta navegando...`)
    }
}