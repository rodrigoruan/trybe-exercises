import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InputTodo extends Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  addItem(callback) {
    const { todoList, toRender } = this.props
    const { value } = this.input.current
    callback(value)
    this.input.current.value = ''
    toRender(todoList)
  }

  render() {
    const { addTodo } = this.props
    return (
      <div className="InputTodo">
        <label htmlFor="inputTodo">Tarefa:</label>
        <input id="inputTodo" type="text" ref={this.input} />
        <input
          id="btnAdd"
          type="button"
          value="Adicionar"
          onClick={() => this.addItem(addTodo)}
        />
      </div>
    )
  }
}
export default InputTodo

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
