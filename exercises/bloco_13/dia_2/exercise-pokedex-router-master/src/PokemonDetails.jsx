import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

const PokemonDetails = () => {
  function pokemonData() {
    //  Pega o pega o pokemon pelo id que a página está e retorna o objeto com as informações dele

    const { pathname } = window.location;
    const pokemonId = pathname.match(/(?<=\/)\d+/);

    return pokemons.find(({ id }) => id === +pokemonId);
  }

  //  Função para favoritar o pokemon

  function favoritePokemon({ target }) {
    const { name } = pokemonData();

    //  Adicionado um array com todos os pokemons que estão no localStorage

    const savedPokes = [];

    [{ ...localStorage }].forEach((pokemon) =>
      savedPokes.push(...Object.values(pokemon))
    );

    //  Verifica se o array com todos os pokemons que estavam no localStorage contém o nome do pokemon, caso sim esse pokemon está favoritado e ao clicar novamente nele deve remover, caso contrário adiciona o pokemon ao localStorage

    if (savedPokes.includes(name)) {
      target.style.backgroundColor = '#ECEFF4';
      localStorage.removeItem(name);
    } else {
      target.style.backgroundColor = 'yellow';
      localStorage.setItem(name, name);
    }
  }

  function renderPokemon() {
    const { summary, foundAt } = pokemonData();

    return (
      <React.Fragment>
        {/* Div que ao clicar adiciona o pokemon aos favoritos ou remove o mesmo.*/}
        <div onClick={favoritePokemon}>Favorite Pokemon ☆</div>

        {/* Chamando o pokemon que foi pego pelo id na página no componente Pokemon para renderizá-lo */}
        <Pokemon pokemon={pokemonData()} />

        {/* Informações adicionais que precisava adicionar como o mapa onde encontra e o sumário */}
        <div>
          <p>{summary}</p>
          <h4>Found At:</h4>
          {foundAt.map(({ location, map }) => (
            <React.Fragment>
              <p>{location}</p>
              <img src={map} alt={location} />
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }

  return renderPokemon();
};

export default PokemonDetails;
