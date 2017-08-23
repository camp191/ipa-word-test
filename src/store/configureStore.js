import { createStore, applyMiddleware, compose } from 'redux'
import ReduxPromise from 'redux-promise'
import rootReducers from './../reducers'

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducers,
    initialState,
    composeEnhancers(applyMiddleware(ReduxPromise)),
  )

  return store
}
