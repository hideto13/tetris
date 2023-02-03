export function gameOverReducer(state, action) {
  switch (action.type) {
    case 'gameOver':
      return {
        gameOver: action.payload,
      }
    default:
      return state
  }
}
