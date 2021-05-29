import React from 'react';

const Pokemon = ({ pokemon }) => {
  console.log(pokemon);
  const { name, type, averageWeight, image } = pokemon;
  return (
    <div className='pokemon'>
      <div>
        <p> {name} </p>
        <p> {type} </p>
        <p>
          {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
        </p>
      </div>
      <img src={image} alt={`${name} sprite`} />
    </div>
  );
};

export default Pokemon;
