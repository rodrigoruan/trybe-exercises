import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import Button from './Button';

const Pokedex = () => {
  const [dados, setDados] = React.useState(0);
  const [pokes, setPokes] = React.useState(pokemons);

  const handleClick = () => {
    setDados((anterior) => (anterior >= pokes.length - 1 ? 0 : anterior + 1));
  };

  const changePoke = ({ target }) => {
    const filtered = /All/.test(target.innerText)
      ? pokemons
      : pokemons.filter((pokemon) => pokemon.type === target.innerText);

    setPokes(filtered);

    if (/Dragon|Normal|Poison|Bug|Electric/.test(filtered[0].type)) {
      setDados(0);
    } else {
      handleClick();
    }
  };

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
