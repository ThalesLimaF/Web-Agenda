const botao = document.querySelector('.botao-menu');

const menuLateral = document.querySelector('.menu-lateral');

const conteudo = document.querySelector('.conteudo');

botao.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo');
    botao.classList.toggle('ativo');
})