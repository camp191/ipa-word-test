import { combineReducers } from 'redux'
import UserReducer from './user'
import WordReducer from './word'

const rootReducers = combineReducers({
  users: UserReducer,
  word: WordReducer,
})

export default rootReducers
