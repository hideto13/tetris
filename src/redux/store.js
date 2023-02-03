import { createStore } from 'redux'
import { gameOverReducer } from './reducers'

function configureStore(state = { gameOver: false }) {
  return createStore(gameOverReducer, state)
}

export default configureStore
