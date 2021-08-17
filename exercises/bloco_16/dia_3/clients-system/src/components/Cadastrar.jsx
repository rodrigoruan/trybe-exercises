import React, { Component } from 'react'
import { addUser } from '../actions/actionCreators'
import { connect } from 'react-redux'

const initialState = {
  nome: '',
  idade: '',
  email: '',
  password: '',
}

const regex = {
  email: /\w+@\w+.com/,
  nome: /[A-z]{3,}/,
  senha: /.+/,
  idade: /[0-9][0-9]/,
}

class Cadastrar extends Component {
  constructor() {
    super()
    this.state = initialState

    this.changeState = this.changeState.bind(this)
    this.addNewUser = this.addNewUser.bind(this)
  }

  changeState({ target }) {
    const { name, value } = target
    this.setState({ [name]: value })
  }

  addNewUser() {
    const { newUser } = this.props
    const { nome, idade, email, password } = this.state
    const user = { nome, idade, email, password }
    if (
      regex.nome.test(nome) &&
      regex.idade.test(idade) &&
      regex.email.test(email) &&
      regex.senha.test(password) &&
      password.length > 6
    ) {
      newUser(user)
      this.setState(initialState)
    } else {
      alert('Digite todos campos de forma válida')
    }
  }

  render() {
    const { nome, idade, email, password } = this.state
    return (
      <div style={{ textAlign: 'center', marginTop: '115px' }}>
        <h1>Realizar cadastro</h1>
        <label>
          Nome:
          <input
            value={nome}
            style={{ marginBottom: '10px' }}
            name="nome"
            onChange={this.changeState}
            type="text"
          />
        </label>
        <br />
        <label>
          Idade:
          <input
            value={idade}
            style={{ marginBottom: '10px' }}
            name="idade"
            onChange={this.changeState}
            type="text"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            value={email}
            style={{ marginBottom: '10px' }}
            name="email"
            onChange={this.changeState}
            type="text"
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            value={password}
            style={{ marginBottom: '10px' }}
            name="password"
            onChange={this.changeState}
            type="password"
          />
        </label>
        <br />
        <button style={{ marginBottom: '10px' }} onClick={this.addNewUser}>
          Gerar cadastro
        </button>
        <br />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  newUser: (user) => dispatch(addUser(user)),
})

export default connect(null, mapDispatchToProps)(Cadastrar)
