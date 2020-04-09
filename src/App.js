import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const ACTasks = [
  {
    name: "Pick Fruit",
    id: Date.now(),
    finished: false,
  },
  {
    name: "Catch Fish",
    id: Date.now(),
    finished: false,
  },
  {
    name: "Dig for Fossils",
    id: Date.now(),
    finished: false,
  },
  {
    name: "Catch Bugs",
    id: Date.now(),
    finished: false,
  },
  {
    name: "Talk to Villagers",
    id: Date.now(),
    finished: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: ACTasks,
    };
  }
  toggleCompleted = (itemId) => {
    console.log("dg: app.js: App: toggleCompleted: itemId:", itemId);
    this.setState({
      tasks: this.state.tasks.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            finished: !item.finished,
          };
        }
        return item;
      }),
    });
  };

  addItem = (itemName) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          name: itemName,
          finished: false,
          id: Date.now(),
        },
      ],
    });
  };

  clearCompleted = () => {
    console.log("dg: app.js: App: clearCompleted:");
    this.setState({
      tasks: this.state.tasks.filter((item) => {
        return !item.finished;
      }),
    });
  };
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="todo-list">Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
