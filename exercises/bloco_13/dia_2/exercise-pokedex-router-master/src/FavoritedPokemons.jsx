import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

//  Componente para renderizar todos os pokemons favoritados

const FavoritedPokemons = () => {
  //  Função que vai retonar um array com todos os pokemons favoritados

  function findFavorited() {
    const arrayOfPokemons = [];

    //  Passa por todos pokemons no localStorage e coloca o nome deles dentro do array acima.

    [{ ...localStorage }].forEach((pokemon) =>
      arrayOfPokemons.push(...Object.values(pokemon))
    );

    //  Filtra o nome de todos os pokemons que estão no localStorage e retorna um array com esses objetos(*Pokemons)

    return pokemons.filter(({ name }) => arrayOfPokemons.includes(name));
  }

  return (
    <div>
      {/* Invoca a função que vai retornar o array dos pokemons que estão filtrados, e para cada pokemon do array chama o componente Pokemon */}

      {findFavorited().map((pokemon) => (
        <Pokemon key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default FavoritedPokemons;
