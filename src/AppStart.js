import React from "react";
import "./App.css";
import AppTodo from "./AppTodo"
import List from "./List"
const initTasks = [
  { id: 'todo-0', content: "Do Homework", done: false },
  { id: 'todo-1', content: "Write a report", done: true },
  { id: 'todo-2', content: "Hangout with friends", done: true },
  { id: 'todo-3', content: "New Task", done: false },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: initTasks }
  }
  render() {
    return (
      <div className="container">
        <h1>Todo List</h1>
        {/* AddTodo start here */}
        <AppTodo />
        {/* AddTodo end here */}
        {/* make a Todos to display tasks from the given initTasks object */}
        <List taskList={this.state.tasks} filter="done" />
        {/* Todos end here */}
      </div>
    );
  }
}
export default App;
