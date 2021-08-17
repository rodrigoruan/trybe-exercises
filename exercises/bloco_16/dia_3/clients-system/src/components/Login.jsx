import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      redirect: false,
    }
    this.verifyUserLogin = this.verifyUserLogin.bind(this)
    this.changeState = this.changeState.bind(this)
  }

  changeState({ target }) {
    const { value, name } = target
    this.setState({ [name]: value })
  }

  verifyUserLogin() {
    const { databaseUsers } = this.props
    const { email, password } = this.state
    const user = databaseUsers.find((user) => user.email === email)
    if (user && user.password === password) {
      this.setState({ redirect: true })
    } else {
      alert('Login inválido')
    }
  }

  render() {
    const { redirect } = this.state
    return (
      <div style={{ textAlign: 'center', marginTop: '150px' }}>
        <h2>Entrar no sistema</h2>
        <label htmlFor="email">
          Email:
          <input
            name="email"
            onChange={this.changeState}
            style={{ marginBottom: '10px', marginRight: '15px' }}
            id="email"
            type="text"
          />
        </label>
        <br />
        <label htmlFor="password">
          Senha:
          <input
            name="password"
            onChange={this.changeState}
            style={{ marginBottom: '10px', marginRight: '15px' }}
            id="password"
            type="password"
          />
        </label>
        <br />
        <button
          style={{
            color: '#eee',
            background: '#252525',
            padding: '4px',
            borderRadius: '5px',
            textDecoration: 'none',
          }}
          onClick={() => this.verifyUserLogin()}
        >
          Entrar
        </button>
        {redirect && <Redirect to="/cadastros" />}
      </div>
    )
  }
}

const mapStateToProps = ({ userReducer }) => ({
  databaseUsers: userReducer,
})

export default connect(mapStateToProps, null)(Login)
