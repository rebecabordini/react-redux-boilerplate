import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addTodo, toggleCompleted } from "../actionCreators";
import { EmptyTodoItem } from "./EmptyTodoItem";
import { TodoItem } from "./TodoItem";

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: text => {
    dispatch(addTodo({ text }));
  },
  onToggle: (index, item) => {
    dispatch(toggleCompleted({ index }));
  }
});

const propTypes = {
  onChange: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool,
      text: PropTypes.string
    })
  ).isRequired
};

const TodoList = ({ todos, onChange, onToggle }) => {
  const listItems = todos.map((item, index) => (
    <TodoItem key={index} index={index} item={item} onToggle={onToggle} />
  ));

  return (
    <div>
      <ul>{listItems}</ul>
      <EmptyTodoItem onChange={onChange} />
    </div>
  );
};

TodoList.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
