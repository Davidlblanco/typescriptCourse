import { NegociacaoController } from "./controllers/negociacqo-controller.js";
// import { NegociacoesView } from "./views/negociacoes-view.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    controller.adiciona();
});
// const negociacoes = new NegociacoesView()
// const template = negociacoes.template()
// console.log(template)
