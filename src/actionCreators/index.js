import { ADD_TODO, TOGGLE_COMPLETED } from "../actionTypes";

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    completed: false,
    ...text
  }
});

export const toggleCompleted = index => ({
  type: TOGGLE_COMPLETED,
  payload: {
    ...index
  }
});
