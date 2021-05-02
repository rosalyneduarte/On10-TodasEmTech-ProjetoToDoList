//Variavel do Input
const inputado = document.querySelector('#todoInput');

//Variavel do botao
const botao = document.getElementById('todoSubmit');

//Variavel da ul
const listaTarefas = document.getElementById('todoLista');

//Variavel do formulario
const formulario = document.getElementById('todoForm');

//Variavel do formulario
const botaoLimpar = document.getElementById('todoRemoverTodos');

//Variavel do formulario
const botaoMarcarTodos = document.querySelector('#todoMarcarTodos');

/*
TESTE das Variaveis
console.log(inputado, 'inputado')
console.log(botao, 'botao')
console.log(listaTarefas, 'lista')
*/

//Criar evento botao
botao.addEventListener('click', (event) => {
    // previne que o formulario seja enviado ao clicar, esperar processar o que precisa da funcao
    event.preventDefault();

    const elementoLista = document.createElement('li');
    const textoElemento = document.createElement('p');
    const deletaElemento = document.createElement('span')


    //Atribuimos o valor do input ao <p> criado a partir do clique no botao
    textoElemento.innerText = inputado.value;
    deletaElemento.innerText = '🗑';

    if (textoElemento.innerText.trim() === ''){
        alert('Insira uma tarefa')
    } else{

    //Pegamos o nó mãe ,e acrescentamos o elemento filho com append
    listaTarefas.appendChild(elementoLista);
    elementoLista.appendChild(textoElemento);
    elementoLista.appendChild(deletaElemento);

    //pegamos o nó do formulario e utilizamos um método para limpar o input (apaga o que foi escrito no campo formulario)
    formulario.reset()
    }
    //Função de checar
    textoElemento.addEventListener('click', () => {
        textoElemento.classList.add('checked');
    });

    //função deletar
    deletaElemento.addEventListener('click', () => {
        elementoLista.remove();  // listaTarefas.removeChild(elementoLista) .... A mesma coisa de forma diferente
    });

    // Todo função de marcar todos
    botaoMarcarTodos.addEventListener('click', () => {
       const todosParagrafos = document.querySelectorAll('p');

       console.log(todosParagrafos, 'Vai retornar todos os <p> encontrados')

       todosParagrafos.forEach(item => {
           item.classList.add('checked');
       });
    });
     // Todo função de marcar todos
     botaoLimpar.addEventListener('click', () => {
       elementoLista.remove() // listaTarefas.innerHTML = ' '; A mesma coisa de fazer ; listaTarefas.removeChild(li)
     });
     

});



/*<ul>
    <li>

    </li>
</ul>

/*const tarefa = document.createElement('li')*/

/*
const teste = document.getElementById('teste_dom');

const botaoTeste = document.getElementById('todoMarcarTodos');

teste.classList.add('vermelho');

console.log(teste, 'paragrafo');
console.log(botaoTeste, 'botaoTeste');

botaoTeste.addEventListener('click', () => {
    console.log('O evento funcionou');
});
*/