import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoes() {
        return fetch('http://localhost:8080/dados').then(res => res.json()).then((res) => {
            console.log(res);
            return res.map(item => new Negociacao(new Date, item.vezes, item.montante));
        });
    }
}
//# sourceMappingURL=negociacoes-services.js.map