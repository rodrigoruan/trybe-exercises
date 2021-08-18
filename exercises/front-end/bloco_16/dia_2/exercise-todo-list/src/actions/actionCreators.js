export const ADD_TASK = 'ADD_TASK'
export const ADD_CONCLUDED = 'ADD_CONCLUDED'
export const RENDER_TODO = 'RENDER_TODO'

export const addTodoTask = (task) => ({
  type: ADD_TASK,
  task,
})

export const renderTodo = (todo) => ({
  type: RENDER_TODO,
  todoList: todo,
})

export const addConcluded = (task) => ({
  type: ADD_CONCLUDED,
  task,
})
