import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textTodo: '',
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  changeTextTodo(value) {
    this.setState({ textTodo: value });
  }

  addItem(value, callback) {
    this.setState({ textTodo: '' });
    callback(value);
  }

  render() {
    const { addTodo, selectedTask, removeTask, listTodo } = this.props;
    const { textTodo } = this.state;
    return (
      <div className='InputTodo'>
        <label htmlFor='inputTodo'>Tarefa:</label>
        <input
          data-testid='id-input-text'
          id='inputTodo'
          type='text'
          value={textTodo}
          onChange={(e) => this.changeTextTodo(e.target.value)}
        />
        <input
          data-testid='id-send-button'
          id='btnAdd'
          type='button'
          value='Adicionar'
          onClick={() => this.addItem(textTodo, addTodo)}
        />
        <input
          data-testid='id-remove'
          value='Remover'
          disabled={selectedTask === '' || listTodo.length === 0}
          type='button'
          onClick={removeTask}
        />
      </div>
    );
  }
}
export default InputTodo;

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
