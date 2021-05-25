import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import './index.css';

const Pokedex = () => {
  return (
    <div className='container'>
      {pokemons.map(({ name, type, averageWeight, image }) => (
        <Pokemon
          name={name}
          type={type}
          averageWeight={averageWeight}
          image={image}
        />
      ))}
    </div>
  );
};

export default Pokedex;
