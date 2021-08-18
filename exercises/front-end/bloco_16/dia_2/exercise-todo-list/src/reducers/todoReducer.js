import { ADD_TASK } from '../actions/actionCreators'

export default function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.task]
    default:
      return state
  }
}
