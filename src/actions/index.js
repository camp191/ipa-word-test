import axios from 'axios'
import RandomWord from 'random-words'
// import key from '../config/key'

export const REGISTER_NAME = 'REGISTER_NAME'
export const FETCH_WORD = 'FETCH_WORD'
export const RANDOM_WORD = 'RANDOM_WORD'

export const regisName = name => ({
  type: REGISTER_NAME,
  payload: name,
})

export const fetchWordData = () => (dispatch) => {
  const randomWord = RandomWord()
  const request = axios.get(`http://api.pearson.com/v2/dictionaries/ldoce5/entries?headword=${randomWord}`)
  dispatch({
    type: FETCH_WORD,
    payload: request,
  })
  dispatch({
    type: RANDOM_WORD,
    payload: randomWord,
  })
}

