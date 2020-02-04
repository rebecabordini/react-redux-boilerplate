const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "TOGGLE_COMPLETED":
      return [
        ...state.slice(0, action.payload.index),
        action.payload,
        ...state.slice(action.payload.index + 1)
      ];
    default:
      return state;
  }
};

export default todoReducer;
