import React from 'react';
function AppTodo() {
  return (
    <div className="Add">
      <input type="text" id="new-todo-input" placeholder="Your task" name="text" autoComplete="off" />
      <button type="submit" className="btn">
        Add
      </button>
      <span>
      <label htmlFor="filter">Filter</label>
      <select name="filter">
        <option value="all">...</option>
        <option value="done">Done</option>
        <option value="active">Not Done Yet</option>
      </select>
      </span>
    </div>
  )
}

export default AppTodo;