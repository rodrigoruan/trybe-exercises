import React from 'react';
import './index.css';

class Pokemon extends React.Component {
  render() {
    return (
      <div className='pokemon'>
        <div className='props'>
          <p>{this.props.name}</p>
          <p>{this.props.type}</p>
          <p>
            {this.props.averageWeight.value +
              this.props.averageWeight.measurementUnit}
          </p>
        </div>
        <div className='image'>
          <img src={this.props.image} alt={this.props.moreInfo}></img>
        </div>
      </div>
    );
  }
}

export default Pokemon;
