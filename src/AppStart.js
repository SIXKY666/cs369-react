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
    this.state = { tasks: initTasks ,filter: "all"}
    this.onFilter = this.onFilter.bind(this)
    this.onCheckBox =  this.onCheckBox.bind(this)
  }

  onFilter = function(e){
    e.preventDefault();
    console.log(e.target, e.target.value)
    this.setState({filter: e.target.value});
  }

  onCheckBox = function(id){
    console.log("Appstart checkbox",id);

    let updateTasks = this.state.tasks.map(
      e => {
        if(e.id === id){
          // e.done = !e.done
          // return e;
          return {...e,done:!e.done}
        }
        return e;
      }
    );
    this.setState({tasks:updateTasks})
  }
  render() {
    return (
      <div className="container">
        <h1>Todo List</h1>
        {/* AddTodo start here */}
        <AppTodo />
        {/* AddTodo end here */}
        <span>
          <label htmlFor="filter">Filter</label>
          <select name="filter" onChange={this.onFilter}>
            <option value="all">...</option>
            <option value="done">Done</option>
            <option value="active">Not Done Yet</option>
          </select>
        </span>
        {/* make a Todos to display tasks from the given initTasks object */}
        <List 
          taskList={this.state.tasks} 
          filter={this.state.filter}
          onCheckBox={this.onCheckBox}
        />
        {/* Todos end here */}
      </div>
    );
  }
}
export default App;
