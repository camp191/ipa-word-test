import { createStore } from 'redux'

export default function configureStore(initialState) {
  const store = createStore(
    initialState,
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )

  return store
}
