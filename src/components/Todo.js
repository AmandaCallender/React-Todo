import React from "react";

const Tasks = (props) => {
  return (
    <div
      className={`tasks${props.tasks.completed ? "completed" : ""}`}
      onClick={(e) => props.toggleCompleted(props.tasks.id)}
    >
      <p>{props.tasks.name}</p>
    </div>
  );
};

export default Tasks;
