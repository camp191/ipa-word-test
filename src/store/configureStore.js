import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import rootReducers from './../reducers'

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducers,
    initialState,
    composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)),
  )

  return store
}
