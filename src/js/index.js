/*
    quando clicar no pokemon da listagem temos que esconder o catão do pokemon aberto e mostrar  cratão correspondente ao que foi selecionado na listagem

    pra isso vamos precisar trabalhar com dois elementos.
    1- listagem 
    2- cartão pokemon

    precizamos criar duas variaveis jc para trabalhar com os elementos da tela

    vamos precisr trabalhar come evento de clique feito pelo o usuário

    - remover a classe "aberto"
    - ao clicar em um pokemon da listagem pegamos o id do pokemon para mostrar o mesmo.
    - Remover a classe ativa que marca o pokemon selecionado
    -adicionar a classe ativo no ítem da lista selecionado.
*/

//precizamos criar duas variaveis jc para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

// vamos precisar trabalhar como evento de clique feito pelo o usuário
listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        // - remover a classe "aberto"
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // - ao clicar em um pokemon da listagem pegamos o id do pokemon para mostrar o mesmo.
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //    -Remover a classe ativo no ítem da lista selecionado.
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //    -Remover a classe ativo no ítem da lista selecionado.
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})

