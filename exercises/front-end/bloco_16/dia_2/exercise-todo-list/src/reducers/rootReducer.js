import todoReducer from './todoReducer'
import concludedReducer from './concludedTasksReducer'
import reducerRenderTodo from './reducerRenderTodo'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todoReducer,
  concludedReducer,
  reducerRenderTodo,
})

export default rootReducer
