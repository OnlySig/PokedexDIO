//chamando a API com fetch, then seria um: quando der certo execute oq esta no bloco (como se fosse um if) e o catch seria oq fazer quando der errado (seria ja o else) e quando a requisição terminar (independentemente dando errado ou não) execute o finally
//esse map de 'pokemons.map' nada mais é doq um for simplificado.
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreBt')

const limit = 10;
let offset = 0;


function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
      const newHtml = pokemons.map((pokemon) =>`
            <li class="pokemon ${pokemon.type}">
              <span class="number">#${pokemon.number}</span>
              <span class="name">${pokemon.name}</span>
              <div class="detail">
                <ol class="types">
                  ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
              </div>
            </li>
        `).join('')
        pokemonList.innerHTML += newHtml
  })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
  offset += limit
  loadPokemonItens(offset, limit)
})
