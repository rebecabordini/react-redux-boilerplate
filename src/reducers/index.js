import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import todoReducer from './todoReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  todos: todoReducer
});

export default rootReducer;