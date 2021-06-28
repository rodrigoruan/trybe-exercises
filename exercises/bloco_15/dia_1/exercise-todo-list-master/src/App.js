import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
      selectedTask: '',
    };

    this.addTodo = this.addTodo.bind(this);
    this.selectTask = this.selectTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  selectTask(e) {
    this.setState({ selectedTask: e });
  }

  removeTask() {
    const { selectedTask, listTodo } = this.state;
    this.setState({
      listTodo: listTodo.filter((task) => task !== selectedTask),
      selectedTask: '',
    });
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  render() {
    const { listTodo, selectedTask } = this.state;
    return (
      <div className='App'>
        <InputTodo
          listTodo={listTodo}
          removeTask={this.removeTask}
          selectedTask={selectedTask}
          addTodo={(todo) => this.addTodo(todo)}
        />
        {listTodo && (
          <ul>
            {listTodo.map((todo, index) => (
              <li key={index + 1}>
                <Item onClick={this.selectTask} content={todo} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
export default App;
