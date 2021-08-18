import React from 'react';
import './css/pokemon.css';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, id } = this.props.pokemon;
    const { active } = this.props;
    return (
      <div className='pokemon'>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight:
            {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          {active && (
            <Link className='link' to={() => `/pokes/${id}`}>
              More details
            </Link>
          )}
        </div>
        <img src={image} alt={`${name} sprite`} />
        {localStorage.getItem(name) && <div>☆</div>}
      </div>
    );
  }
}

export default Pokemon;
