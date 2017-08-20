import { combineReducers } from 'redux'
import UserReducer from './user'

const rootReducers = combineReducers({
  users: UserReducer,
})

export default rootReducers
