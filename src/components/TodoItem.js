import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  item: PropTypes.shape({
    completed: PropTypes.bool,
    text: PropTypes.string
  }),
  index: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired
};

export const TodoItem = ({ item, index, onToggle }) => {
  const renderedText = item.completed ? (
    <strike>{item.text}</strike>
  ) : (
    item.text
  );

  return (
    <li
      onClick={e => {
        onToggle(index, item);
      }}
    >
      {renderedText}
    </li>
  );
};

TodoItem.propTypes = propTypes;
