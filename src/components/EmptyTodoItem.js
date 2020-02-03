import React from "react";
import PropTypes from "prop-types";

const enterPressed = event => {
  if (event.keyCode === 13 || event.which === 13)
    document.getElementById("addTodoButton").click();
};

const propTypes = {
  onChange: PropTypes.func.isRequired
};

export const EmptyTodoItem = ({ onChange }) => (
  <div>
    <input id="newTodo" type="text" onKeyPress={enterPressed} />
    <button
      id="addTodoButton"
      onClick={e => {
        const value = document.getElementById("newTodo").value;
        onChange(value);
      }}
    >
      Add
    </button>
  </div>
);

EmptyTodoItem.propTypes = propTypes;
