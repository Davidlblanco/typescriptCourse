import { domInject } from "../decorators/domInject.js"
import { inspect } from "../decorators/inspect.js"
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js"
import { diasDaSemena } from "../enums/dias-da-semana.js"
import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"
import { NegociacoesService } from "../services/negociacoes-services.js"
import { imprimir } from "../utils/imprimir.js"
import { MensagemView } from "../views/mensagem-view.js"
import { NegociacoesView } from "../views/negociacoes-view.js"

export class NegociacaoController {
    @domInject('#data')
    private inputData: HTMLInputElement
    @domInject('#quantidade')
    private inputQuantidade: HTMLInputElement
    @domInject('#valor')
    private inputValor: HTMLInputElement
    private negociacoes: Negociacoes = new Negociacoes
    private negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView')
    private mensagenView = new MensagemView('#mensagemView')
    private negociacoesService = new NegociacoesService()

    constructor() {

        this.negociacoesView.update(this.negociacoes)
    }

    @inspect()
    @logarTempoDeExecucao()
    public adiciona(): any {
        // const negociacaoTemp = new Negociacao(null, 0, 0) 
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )

        if (!this.diaUtil(negociacao.data)) {
            this.mensagenView.update('Apenas negociações em dias uteis são aceitas')
            return
        }
        this.negociacoes.adiciona(negociacao)
        imprimir(negociacao)
        this.atualizaView()
        this.limparFormulario()
    }
    importaDados(): void {
        this.negociacoesService.obterNegociacoes()
            .then(negociacoesDeHoje => {
                return negociacoesDeHoje.filter((negociacaoDeHoje) => {
                    return !this.negociacoes.lista().some(negociacao => negociacao.eIgual(negociacaoDeHoje))
                })
            })
            .then(negociacoesDeHoje => {
                for (let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao)
                }
                this.negociacoesView.update(this.negociacoes)
            })
    }


    private diaUtil(date: Date): boolean {
        return date.getDay() > diasDaSemena.DOMINGO && date.getDay() < diasDaSemena.SABADO
    }

    private limparFormulario(): void {
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus()
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagenView.update('Negociacão adicionada com sucesso!')
    }
}