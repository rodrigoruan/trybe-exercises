import React, { Component } from 'react';

export class Input extends Component {
  render() {
    const { ...props } = this.props;

    return <input {...props} />;
  }
}

export default Input;
