import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao";

export class Negociacoes implements Modelo<Negociacoes>{
    private negociacoes: Array<Negociacao> = []
    constructor() {
    }
    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes
    }



    public paraTexto(): string {
        return ``
    }


    public eIgual(obj: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) == JSON.stringify(obj)
    }

}