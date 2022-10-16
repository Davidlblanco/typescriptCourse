export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return ``;
    }
    eIgual(obj) {
        return JSON.stringify(this.negociacoes) == JSON.stringify(obj);
    }
}
