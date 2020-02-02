import React from 'react';
import { connect } from 'react-redux';
import { updateTodos } from '../actions';
import { EmptyTodoItem } from './EmptyTodoItem'

const TodoList = ({todos, onChange}) => {
  return (
    <div>
      <ul>
        {todos.map(item => (
          <li>{item}</li>
        ))}
      </ul>
      <EmptyTodoItem onChange={onChange} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = dispatch => ({
  onChange: (item) => { 
    dispatch(updateTodos(item)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)