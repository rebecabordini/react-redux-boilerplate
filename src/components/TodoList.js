import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addTodo } from "../actions";
import { EmptyTodoItem } from "./EmptyTodoItem";
import { TodoItem } from "./TodoItem";

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: item => {
    dispatch(addTodo(item));
  }
});

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
}

const TodoList = ({ todos, onChange }) => {
  const listItems = todos.map((item, index) => (
    <TodoItem key={index} item={item} />
  ));
  return (
    <div>
      <ul>{listItems}</ul>
      <EmptyTodoItem onChange={onChange} />
    </div>
  );
};

TodoList.propTypes = propTypes

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
