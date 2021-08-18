import { RENDER_TODO } from '../actions/actionCreators'

export default function reducerRenderTodo(state = [], action) {
  switch (action.type) {
    case RENDER_TODO:
      return action.todoList
    default:
      return state
  }
}
