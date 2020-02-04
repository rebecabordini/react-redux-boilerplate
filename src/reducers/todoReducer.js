const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload.item];
    default:
      return state;
  }
};

export default todoReducer;
