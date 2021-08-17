import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav style={{ textAlign: 'center' }}>
        <Link
          style={{
            marginLeft: '20px',
            textDecoration: 'none',
            color: '#eee',
            background: '#252525',
            padding: '5px',
            borderRadius: '4px',
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          style={{
            marginLeft: '20px',
            textDecoration: 'none',
            color: '#eee',
            background: '#252525',
            padding: '5px',
            borderRadius: '4px',
          }}
          to="/login"
        >
          Login
        </Link>
        <Link
          style={{
            marginLeft: '20px',
            textDecoration: 'none',
            color: '#eee',
            background: '#252525',
            padding: '5px',
            borderRadius: '4px',
          }}
          to="/cadastrar"
        >
          Cadastrar
        </Link>
      </nav>
    )
  }
}

export default Header
