import reducer from '../reducers/reducer'
//importe o método applyMiddleware
import { createStore, applyMiddleware } from 'redux'
//importe o redux-thunk
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({ reducer })

//aplique o middleware
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
