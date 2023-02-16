import React from 'react';
function AddTodo(props) {
  const add = props.onAdd;
  const taskCount = props.taskList.length;
  const onAdd = () => {
    var input = document.getElementById('new-todo').value;
    const data = {
      id: "todo-" + taskCount,
      content: input,
      done: false
    }
    document.getElementById('new-todo').value = "";
    add(data);
  };
  return (
    <div className="Add">
      <input type="text" id="new-todo" placeholder="Your task" name="text" autoComplete="off" />
      <button type="submit" className="btn" onClick={() => onAdd()}>
        Add
      </button>
    </div>
  )
}

export default AddTodo;