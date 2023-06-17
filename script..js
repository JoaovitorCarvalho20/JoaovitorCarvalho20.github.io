// Selecionando os elementos do DOM
let inputNovaTarefa = document.querySelector('#NovaTarefa');
let inputNovaData = document.querySelector('#NovaTarefa2');
let btnAddTarefa = document.querySelector('#AddTarefa');
let listaTarefas = document.querySelector('#ListaTarefas');

// Adicionando um event listener para a tecla Enter no campo de nova tarefa
inputNovaTarefa.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        // Criando um objeto tarefa com nome, data e ID
        let tarefa = {
            nome: inputNovaTarefa.value,
            data: inputNovaData.value,
            id: gerarid()
        };
        // Chamando a função AdicionarTarefa com a tarefa criada
        AdicionarTarefa(tarefa);
    }
});

// Adicionando um event listener para o botão de adicionar tarefa
btnAddTarefa.addEventListener('click', (e) => {
    // Criando um objeto tarefa com nome, data e ID
    let tarefa = {
        nome: inputNovaTarefa.value,
        data: inputNovaData.value,
        id: gerarid()
    };
    // Chamando a função AdicionarTarefa com a tarefa criada
    AdicionarTarefa(tarefa);
});

// Função para gerar um ID aleatório
function gerarid() {
    return Math.floor(Math.random() * 3000);
}

// Função para adicionar uma tarefa na lista
function AdicionarTarefa(tarefa) {
    // Criando uma nova <li> com as informações da tarefa
    let li = criartagLi(tarefa);
    // Adicionando a <li> na lista de tarefas
    listaTarefas.appendChild(li);
    // Limpando os campos de entrada
    inputNovaTarefa.value = '';
    inputNovaData.value = '';
}

// Função para criar uma <li> com os elementos da tarefa
function criartagLi(tarefa) {
    // Criando os elementos <li>, <span> e <div>
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.classList.add('Texto-Tarefa');
    span.innerHTML = tarefa.nome;

    let data = document.createElement('span');
    data.classList.add('Data-Tarefa');
    data.innerHTML = tarefa.data;

    let div = document.createElement('div');

    // Criando os botões de edição e exclusão
    let btneditar = document.createElement('button');
    btneditar.classList.add('btnAcao1');
    btneditar.innerHTML = '<i class="fa fa-pencil"></i>';
    btneditar.setAttribute('onclick', 'editar(' + tarefa.id + ')');

    let btnexcluir = document.createElement('button');
    btnexcluir.classList.add('btnAcao2');
    btnexcluir.innerHTML = '<i class="fa fa-trash"></i>';
    btnexcluir.setAttribute('onclick', 'excluir(' + tarefa.id + ')');

    // Adicionando os botões à <div>
    div.appendChild(btneditar);
    div.appendChild(btnexcluir);

    // Adicionando os elementos à <li>
    li.appendChild(span);
    li.appendChild(data);
    li.appendChild(div);

    return li;
}

// Função para editar uma tarefa
function editar(idtarefa) {
    alert(idtarefa);
}

// Função para excluir uma tarefa
function excluir(idtarefa) {
    alert(idtarefa);
}
