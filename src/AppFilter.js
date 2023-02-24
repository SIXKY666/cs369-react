import React, { useState } from "react";
import "./App.css";
import { AddTodo, Title, Todos } from "./features";

const initTasks = [
  { id: "todo-0", content: "Do Homework", done: false },
  { id: "todo-1", content: "Write a report", done: true },
  { id: "todo-2", content: "Hangout with friends", done: true },
  { id: "todo-3", content: "New Task", done: false },
];

// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {tasks: initTasks, filter: "all"};
//     this.toggleDone = this.toggleDone.bind(this);
//   }
//   onFilterChange = (e) => {
//     this.setState({filter:e.target.value});
//   };
//   onDelete = (id) => {
//     let updatedTasks = this.state.tasks.filter((e) => {
//       return e.id !== id;
//     });
//     this.setState({tasks:updatedTasks});
//   };

//   addTask = e => {
//     console.log("Add task", e);
//     let updatedTasks = [...this.state.tasks, {
//         id:parseInt(Math.random()*100),
//         content: e,
//         done: false,
//     }]
//     this.setState({tasks: updatedTasks})
//   }
//   toggleDone(id) {
//     console.log("toggle", id)
//     const updatedTasks = this.state.tasks.map((e) => {
//         if (id === e.id) {
//           // use object spread to make a new obkect
//           // whose `done` prop has been inverted
//           return { ...e, done: !e.done };
//         }
//         return e;
//       });
//       this.setState({tasks: updatedTasks});
//   }

//   render() {
//     let {tasks, filter} = this.state;
//   return (
//     <div className="container">
//       <Title />
//       <AddTodo onAdd={this.addTask} />
//       <span>
//         <label htmlFor="filter">Filter</label>
//         <select name="filter" onChange={this.onFilterChange} value={filter}>
//           <option value="all">...</option>
//           <option value="done">Done</option>
//           <option value="active">Not Done Yet</option>
//         </select>
//       </span>
//       <Todos
//         tasks={tasks}
//         onDelete={this.onDelete}
//         toggleDone={this.toggleDone}
//         filter={filter}
//       />
//     </div>
//   );
//   }
// }
export default function App() {
  const [filter, setFilter] = useState("all")
  const [taskList, setTasks] = useState(initTasks)

  const onFilterChange = (e) => {
    console.log(e.target.value)
    setFilter(e.target.value);
  };
  const onDelete = (id) => {
    let updatedTasks = taskList.filter((e) => {
      return e.id !== id;
    });
    setTasks(updatedTasks)
  };

  const addTask = e => {
    /* Logging the event object to the console. */
    console.log("Add task", e);
    let updatedTasks = [...taskList, {
      id: parseInt(Math.random() * 100),
      content: e,
      done: false,
    }]
    setTasks(updatedTasks)
  };

  const toggleDone = (id) => {
    //console.log("toggle", id)
    const updatedTasks = taskList.map((e) => {
      if (id === e.id) {
        // use object spread to make a new obkect
        // whose `done` prop has been inverted
        return { ...e, done: !e.done };
      }
      return e;
    });
    setTasks(updatedTasks);
  };

  //return 
  return (
    <div className="container">
      <Title />
      <AddTodo onAdd={(event) => addTask(event)} />
      <span>
        <label htmlFor="filter">Filter</label>
        <select name="filter" onChange={(event) => onFilterChange(event)} >
          <option value="all">...</option>
          <option value="done">Done</option>
          <option value="active">Not Done Yet</option>
        </select>
      </span>
      <Todos tasks={taskList}
        onDelete={onDelete}
        toggleDone={toggleDone}
        filter={filter} />
    </div>
  );
}