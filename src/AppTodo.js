import React from 'react';
function AppTodo() {
  return (
    <div className="Add">
      <input type="text" id="new-todo-input" placeholder="Your task" name="text" autoComplete="off" />
      <button type="submit" className="btn">
        Add
      </button>
    </div>
  )
}

export default AppTodo;