import { FETCH_WORD } from './../actions'

export default function fetchWord(state = {}, action) {
  switch (action.type) {
    case FETCH_WORD:
      return action.payload.data.results
    default:
      return state
  }
}
