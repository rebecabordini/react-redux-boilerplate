const todoReducer = (state= [], action) => {
  switch (action.type) {
    case 'UPDATE_TODOS':
      return [...state, action.item]
    default:
      return state
  }
}

export default todoReducer
