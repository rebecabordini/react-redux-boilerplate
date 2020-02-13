const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "TOGGLE_COMPLETED":
      return state.map((item, index) => {
        if (index === action.payload.index) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });
    default:
      return state;
  }
};

export default todoReducer;
