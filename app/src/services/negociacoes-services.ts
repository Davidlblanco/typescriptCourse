import { Negociacao } from "../models/negociacao.js"

export class NegociacoesService {
    public obterNegociacoes(): Promise<Array<Negociacao>> {
        return fetch('http://localhost:8080/dados').then(res => res.json()).then((res: Array<NegociacaoDoDia>) => {
            console.log(res)
            return res.map(item => new Negociacao(new Date, item.vezes, item.montante))
        })
    }
}