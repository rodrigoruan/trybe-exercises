import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteUser } from '../actions/actionCreators'

class Cadastrados extends Component {
  constructor(props) {
    super(props)
    const { users } = props
    this.state = {
      users: users,
    }
    this.orderUsers = this.orderUsers.bind(this)
  }

  orderUsers({ target: { checked } }) {
    const { users } = this.props
    const copyUsers = [...users]
    if (checked) {
      this.setState({
        users: copyUsers.sort(
          (a, b) =>
            a.nome.toLowerCase().charCodeAt(0) -
            b.nome.toLowerCase().charCodeAt(0),
        ),
      })
    } else {
      this.setState({ users: users })
    }
  }

  render() {
    const { users } = this.state
    const { deleteUser } = this.props
    return (
      <div style={{ textAlign: 'center', marginTop: '150px' }}>
        {users.length > 0 && (
          <>
            <input type="checkbox" onChange={this.orderUsers} />
            Ordenar alfabeticamente
          </>
        )}
        {users.length ? (
          users.map(({ nome, email }) => (
            <>
              <h3 key={email}>
                {nome}, {email}{' '}
                <span
                  onClick={({ target: { parentElement } }) => {
                    deleteUser(nome)
                    parentElement.remove()
                  }}
                >
                  X
                </span>
              </h3>
            </>
          ))
        ) : (
          <h1 style={{ color: '#252525' }}>Nenhum cliente cadastrado</h1>
        )}
        <Link
          style={{
            color: '#eee',
            background: '#252525',
            padding: '4px',
            borderRadius: '5px',
            textDecoration: 'none',
          }}
          to="/cadastrar"
        >
          Cadastrar
        </Link>
      </div>
    )
  }
}

const mapStateToProps = ({ userReducer }) => ({
  users: userReducer,
})

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (user) => dispatch(deleteUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cadastrados)
