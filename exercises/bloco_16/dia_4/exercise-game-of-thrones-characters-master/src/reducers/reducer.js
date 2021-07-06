import {
  GET_CHARACTER,
  REQUEST_CHARACTER,
  FAILED_REQUEST,
} from '../actions/actions'

const INITIAL_STATE = {
  character: '',
  error: '',
  loading: false,
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_CHARACTER:
      return { ...state, loading: true }
    case GET_CHARACTER:
      return { ...state, character: action.character, loading: false }
    case FAILED_REQUEST:
      return { ...state, error: action.error, loading: false }
    default:
      return state
  }
}

export default reducer
