import {
  GET_TECH,
  REQUEST_TECH,
  FAILED_REQUEST,
} from '../actions/actionCreators'

const INITIAL_STATE = {
  loading: false,
  tech: '',
  error: '',
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_TECH:
      return { ...state, loading: true }
    case GET_TECH:
      return { ...state, tech: action.tech, loading: false }
    case FAILED_REQUEST:
      return { ...state, error: action.error, loading: false }
    default:
      return state
  }
}
