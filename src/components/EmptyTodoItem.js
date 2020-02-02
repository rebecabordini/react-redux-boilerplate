import React from 'react';

export const EmptyTodoItem = ({ onChange }) => (
  <div>
    <input type="text" id="newTodo" />
    <button 
      onClick={(e) => {
        const value = document.getElementById('newTodo').value
        onChange(value)
    }}>Add</button>
  </div>
)
