import { NegociacaoController } from "./controllers/negociacao-controller.js"
// import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form')
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        controller.adiciona()
    })
}
else {
    throw Error('Não foi possível inicializar a aplicação, verifique se o form existe.')
}

// const negociacoes = new NegociacoesView()
// const template = negociacoes.template()
// console.log(template)