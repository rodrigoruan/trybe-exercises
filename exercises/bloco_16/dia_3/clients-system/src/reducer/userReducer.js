import { ADD_USER, DELETE_USER } from '../actions/actionCreators'

export default function userReducer(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.user]
    case DELETE_USER:
      return [...state].filter((item) => item.nome !== action.user)
    default:
      return state
  }
}
