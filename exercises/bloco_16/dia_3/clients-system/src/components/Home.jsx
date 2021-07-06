import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '150px' }}>
        <h1 style={{ color: '#252525' }}>Bem vindo!</h1>
        <Link to="/login">Fazer Login</Link>
      </div>
    )
  }
}

export default Home
