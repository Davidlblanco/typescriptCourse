import { Negociacoes } from "../models/negociacoes.js"

export class NegociacoesView {
    private elemento: HTMLElement
    constructor(
        selector: string
    ) {
        this.elemento = document.querySelector(selector)
    }
    template(model: Negociacoes): string {
        return `
            <table class='table table-hover table-bordered'>
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao =>
            `
                                        <tr>
                                            <td>
                                            ${new Intl.DateTimeFormat().format(negociacao.data)}
                                            </td>

                                            <td>
                                            ${negociacao.quantidade}
                                            </td>

                                            <td>
                                            ${negociacao.quantidade}
                                            </td>
                                        </tr>
                                    `
        ).join('')}
                </tbody>
            </table>
        `
    }

    update(model: Negociacoes): void {
        this.elemento.innerHTML = this.template(model)
    }
}