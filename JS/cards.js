const conteudo = document.querySelector('.conteudo');
export const btnSalvar = document.querySelector('.btnSalvar');

btnSalvar.addEventListener('click', () => {
  
  const titulo = document.querySelector('.tituloInput').value;
  const descricao = document.querySelector('.descricaoInput').value;
  const inicio = document.querySelector('.inicioInput').value;
  const fim = document.querySelector('.fimInput').value;

if (!titulo || !descricao){
  alert('Preencha todos os campos!')
} else {
  
const novoCard = document.createElement('div')
novoCard.classList.add('cards')
novoCard.innerHTML = `<div class="top">
<button class="editar"><i class="fa-solid fa-pen"></i></button>
<h1>${titulo}</h1>
<button class="remover"><i class="fa-solid fa-trash"></i></button>
 </div> 
<div class="meio">
<p>${descricao}</p>
</div>
<div class="baixo">
<p>${inicio} - ${fim}</p>
</div>`;

conteudo.appendChild(novoCard);


const btnRemover = document.querySelector('.remover');

btnRemover.addEventListener('click', () => {
    novoCard.remove();
  })
}
})

