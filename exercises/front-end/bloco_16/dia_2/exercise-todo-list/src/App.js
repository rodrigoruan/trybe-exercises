import React, { Component } from 'react'
import InputTodo from './InputTodo'
import Item from './Item'
import { addTodoTask, addConcluded, renderTodo } from './actions/actionCreators'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { addTask, addConcluded, renderTodo, toRender, todoList, concludedList } = this.props
    return (
      <div className="App">
        <InputTodo todoList={todoList} toRender={toRender} addTodo={(todo) => addTask(todo)} />
        <p onClick={() => toRender(todoList)}>Todas tarefas</p>
        <p onClick={() => toRender(concludedList)}>Concluídas</p>
        <p onClick={() => toRender(todoList.filter((task) => !concludedList.includes(task)))}>Em progresso</p>
        {renderTodo && (
          <ul>
            {renderTodo.map((todo, index) => (
              <li key={index}>
                <Item addConcluded={addConcluded} content={todo} />
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ todoReducer, concludedReducer, reducerRenderTodo }) => ({
  todoList: todoReducer,
  concludedList: concludedReducer,
  renderTodo: reducerRenderTodo,
})

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTodoTask(task)),
  addConcluded: (task) => dispatch(addConcluded(task)),
  toRender: (todoList) => dispatch(renderTodo(todoList)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
