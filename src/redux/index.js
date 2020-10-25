import { createStore } from 'redux'

import reducer from './reducer'

export const configureStore = () => {
  const store = createStore(reducer)
  window.store = store
  return store
}
