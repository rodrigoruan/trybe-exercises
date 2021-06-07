// arquivo Users.js
import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingMessage } = this.props;
    return (
      <div>
        <h2>Users</h2>
        <p> {greetingMessage}, My awesome Users component </p>
      </div>
    );
  }
}

export default Users;
