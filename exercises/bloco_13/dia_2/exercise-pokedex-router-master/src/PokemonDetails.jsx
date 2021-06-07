import React from 'react';
import pokemons from './data';

const PokemonDetails = () => {
  function pokemonData() {
    const { pathname } = window.location;
    const pokemonId = pathname.match(/(?<=\/)\d+/);
    return pokemons.find(({ id }) => id === +pokemonId);
  }

  function favoritePokemon({ target }) {
    const { name } = pokemonData();
    if (target.style.backgroundColor === 'yellow') {
      target.style.backgroundColor = 'white';
      localStorage.removeItem(name)
    } else {
      target.style.backgroundColor = 'yellow';
      localStorage.setItem(name, name);
    }
    console.log(localStorage.getItem(name))
  }

  function renderPokemon() {
    const { name, type, averageWeight, summary, foundAt, image } =
      pokemonData();

    return (
      <div>
        <div onClick={favoritePokemon}>Favorite Pokemon ☆</div>
        <h3>{name}</h3>
        <h3>{type}</h3>
        <h3>
          {averageWeight.value} {averageWeight.measurementUnit}
        </h3>
        <img src={image} alt='pokemon' />
        <p>{summary}</p>
        <h4>Found At:</h4>
        {foundAt.map(({ location, map }) => (
          <React.Fragment>
            <p>{location}</p>
            <img src={map} alt={location} />
          </React.Fragment>
        ))}
      </div>
    );
  }

  return renderPokemon();
};

export default PokemonDetails;
