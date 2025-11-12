const conteudo = document.querySelector('.conteudo');
export const btnSalvar = document.querySelector('.btnSalvar');
const pesquisaInput = document.querySelector('.pesquisaInput');

// 🔹 Carrega as tarefas do Local Storage
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

// 🔹 Função para criar um card visualmente
function criarCard(tarefa) {
  const novoCard = document.createElement('div');
  novoCard.classList.add('cards');
  novoCard.innerHTML = `
    <div class="top">
      <button class="editar"><i class="fa-solid fa-pen"></i></button>
      <h1>${tarefa.titulo}</h1>
      <button class="remover"><i class="fa-solid fa-trash"></i></button>
    </div> 
    <div class="meio">
      <p>${tarefa.descricao}</p>
    </div>
    <div class="baixo">
      <p>${tarefa.inicio} - ${tarefa.fim}</p>
    </div>
  `;
  conteudo.appendChild(novoCard);
}

// 🔹 Função para mostrar todos os cards
function exibirCards(lista) {
  conteudo.querySelectorAll('.cards').forEach(card => card.remove());
  lista.forEach(criarCard);
}

// 🔹 Mostra as tarefas salvas ao abrir
exibirCards(tarefas);

// 🔹 Botão Salvar
btnSalvar.addEventListener('click', () => {
  const titulo = document.querySelector('.tituloInput').value;
  const descricao = document.querySelector('.descricaoInput').value;
  const inicio = document.querySelector('.inicioInput').value;
  const fim = document.querySelector('.fimInput').value;

  if (!titulo || !descricao) {
    alert('Preencha todos os campos!');
    return;
  }

  const tarefa = { titulo, descricao, inicio, fim };
  tarefas.push(tarefa);
  localStorage.setItem('tarefas', JSON.stringify(tarefas));

  exibirCards(tarefas);

  document.querySelector('.tituloInput').value = '';
  document.querySelector('.descricaoInput').value = '';
  document.querySelector('.inicioInput').value = '';
  document.querySelector('.fimInput').value = '';
});

// 🔹 Remover card
conteudo.addEventListener('click', (e) => {
  const btn = e.target.closest('.remover');
  if (!btn) return;

  const card = btn.closest('.cards');
  const titulo = card.querySelector('h1').textContent;

  const index = tarefas.findIndex(t => t.titulo === titulo);
  if (index !== -1) {
    tarefas.splice(index, 1);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  card.remove();
});

// 🔹 Filtro com .filter()
pesquisaInput.addEventListener('input', () => {
  const texto = pesquisaInput.value.toLowerCase();

  // filtra apenas as tarefas cujo título contém o texto digitado
  const filtradas = tarefas.filter(t => t.titulo.toLowerCase().includes(texto));

  exibirCards(filtradas);
});
