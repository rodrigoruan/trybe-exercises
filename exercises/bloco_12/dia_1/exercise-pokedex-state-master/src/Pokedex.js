import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import Button from './Button';

const Pokedex = () => {
  const [dados, setDados] = React.useState(0);
  const [pokes, setPokes] = React.useState(pokemons);

 
  return (
    <>
      <div className='pokedex'>{<Pokemon pokemon={pokes[dados]} />}</div>
      {[...new Set(pokemons.map((poke) => poke.type))].map((type) => (
        <Button className={type} key={type} click={changePoke} name={type} />
      ))}
      <div>
        <Button className='All' click={changePoke} name={'All'} />
        <Button
          className='Next'
          disabled={pokes.length === 1}
          click={handleClick}
          name={'Next Pokemon'}
        />
      </div>
    </>
  );
};

export default Pokedex;
