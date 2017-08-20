import { REGISTER_NAME } from './../actions'

const initialState = {
  user: '',
}

export default function registerUser(state = initialState, action) {
  switch (action.type) {
    case REGISTER_NAME:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}
