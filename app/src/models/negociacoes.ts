import { Comparavel } from "../interfaces/comparavel.js";
import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao";

export class Negociacoes implements Imprimivel, Comparavel<Negociacoes> {
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