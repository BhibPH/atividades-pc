export enum Genero {
    MASCULINO,
    FEMININO
}

export class Humano {
    nome: string
    idade: number 
    altura: number
    genero: Genero
    cor: string
    peso: number

    constructor(nome: string, idade: number, altura: number, genero: Genero, cor: string, peso: number){
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.genero = genero
        this.cor = cor
        this.peso = peso
    }

    andar() {
        console.log(`${this.nome} está andando...'1`)
    }
    
}