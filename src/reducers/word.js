import { FETCH_WORD, RANDOM_WORD } from './../actions'

export default function fetchWord(state = {}, action) {
  switch (action.type) {
    case FETCH_WORD:
      return { ...state, wordDatas: action.payload.data.results }
    case RANDOM_WORD:
      return { ...state, wordRandom: action.payload }
    default:
      return state
  }
}
