import { ADD_CONCLUDED } from '../actions/actionCreators'

export default function concludedReducer(state = [], action) {
  switch (action.type) {
    case ADD_CONCLUDED:
      return [...state, action.task]
    default:
      return state
  }
}
