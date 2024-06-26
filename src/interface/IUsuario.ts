export interface IUsuario {
    nome: string 
    readonly cpf: string
    senha: string

    navegar(): void
}