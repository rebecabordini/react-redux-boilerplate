import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  item: PropTypes.string.isRequired
};

export const TodoItem = ({ item }) => <li>{item}</li>;

TodoItem.propTypes = propTypes;
