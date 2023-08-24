/*
    O que precisamos fazer? - quando passar o mause por cima do personagem da lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

        OBJETIVO 1 - quando passar o mause em cima do personagem da listagem, devemos selecioná-lo
            passo 1 - pegar os personagens no JS para poder verificar quando o usuário passar o mause em cima de um deles
            
            passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mause
            
            passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele

        OBJETIVO 2 - quando passar o mause por cima do personagem na listagem, trocar a imagem, o nome e a descrição do personangem grande
            passo 1 - pegar o elemento do personagem grande para adicionar as informações nele
            
            passo 2 - alterar a imagem do personagem grande
            
            passo 3 - alterar o nome do personagem grande
            
            passo 4 - alterar a descrição do personagem grande
*/

//OBJETIVO 1 - quando passar o mause em cima do personagem da listagem, devemos selecioná-lo
// passo 1 - pegar os personagens no JS para poder verificar quando o usuário passar o mause em cima de um deles

const personagens = document.querySelectorAll('.personagem') //Faz uma busca por todos os seletores que tenham a classe com o nome 'personagem'

// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mause
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        personagem.classList.add('selecionado');

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth' });
        }

        // passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele
        removerSelecaoDoPersonagem();

        personagem.classList.add('.selecionado');

        // OBJETIVO 2 - quando passar o mause por cima do personagem na listagem, trocar a imagem, o nome e a descrição do personangem grande
        
        // passo 1 - pegar o elemento do personagem grande para adicionar as informações nele
        alterarImagemPersonagemSelecionado(personagem);

        // passo 3 - alterar o nome do personagem grande
        altarNomePersonagemSelecionado(personagem);
        
        // passo 4 - alterar a descrição do personagem grande
        alterarDescricaoPersonagem(personagem);

    })
}) // forEach para cada item dessa lista vai ser feita alguma coisa


function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    // passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value; // pegando o id do personagem que está com o mause em cima
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function altarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}




//representação do personagem quando passa o mause em cima
//personagem.classList lista de classe que o elemento tem
//.add('selecionado'); adicionando uma nova classe