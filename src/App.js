import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const tasks = [
  {
    task: "Pick Fruit",
    id: 10,
    completed: false,
  },
  {
    task: "Catch Fish",
    id: 20,
    completed: false,
  },
  {
    task: "Dig for Fossils",
    id: 30,
    completed: false,
  },
  {
    task: "Catch Bugs",
    id: 40,
    completed: false,
  },
  {
    task: "Talk to Villagers",
    id: 50,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = { tasks };
  }

  addTask = (e, task) => {
    e.preventDefault();

    const newTask = {
      task: task,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  toggleComplete = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }),
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter((task) => task.completed === false),
    });
  };
  render() {
    return (
      <div className="Container">
        <div>
          <h2>Welcome to your Animal Crossing To Do App!</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleComplete={this.toggleComplete}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
