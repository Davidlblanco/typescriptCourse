import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao";

export class Negociacoes implements Imprimivel {
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
}