import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.type}</p>
        <p>
          {this.props.averageWeight}{' '}
        </p>
        <img src={this.props.image} alt={this.props.moreInfo}></img>
      </div>
    );
  }
}

export default Pokemon;
