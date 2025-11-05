import { btnSalvar } from "./cards.js";

const botao = document.querySelector('.botao-menu');

const menuLateral = document.querySelector('.menu-lateral');

const conteudo = document.querySelector('.conteudo');

botao.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo');
    botao.classList.toggle('ativo');
})

const cardForm = document.querySelector('.cardForm');

const botaoPlus = document.querySelector('.plus')

botaoPlus.addEventListener('click', () => {
    cardForm.classList.add('ativo');
});


const btnFechar = document.querySelector('.btnFechar');

btnFechar.addEventListener('click', () => {
    cardForm.classList.remove('ativo');
});


btnSalvar.addEventListener('click', () => {
    cardForm.classList.remove('ativo');
});

btnSalvar.addEventListener('click', () => {
    cardForm.classList.remove('ativo');
});

