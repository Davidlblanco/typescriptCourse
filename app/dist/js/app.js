import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação, verifique se o form existe.');
}
const botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        controller.importaDados();
    });
}
else {
    throw Error("Botão importa nao foi encontrado");
}
