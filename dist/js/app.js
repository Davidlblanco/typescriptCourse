import { NegociacaoController } from "./controllers/negociacqo-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    controller.adiciona();
});
