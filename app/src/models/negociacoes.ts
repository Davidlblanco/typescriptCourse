import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = []
    constructor() {

    }

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes
    }
}