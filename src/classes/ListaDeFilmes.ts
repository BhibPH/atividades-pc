import { filme } from "./filmes";

export class ListaDeFilmes {
    filmes: filme[] = []

    adicionarFilme(...filmes: filme[]){
        for (let obj of filmes) {
            this.filmes.push(obj)
        }
    }
}