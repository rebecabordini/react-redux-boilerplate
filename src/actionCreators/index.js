import { ADD_TODO, TOGGLE_COMPLETED } from "../actionTypes";

export const addTodo = payload => ({
  type: ADD_TODO,
  payload: {
    completed: false,
    ...payload
  }
});

export const toggleCompleted = ({ item, index }) => ({
  type: TOGGLE_COMPLETED,
  payload: {
    ...item,
    completed: !item.completed,
    index: index
  }
});
