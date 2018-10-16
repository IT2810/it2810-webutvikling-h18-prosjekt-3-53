import React from "react";

function Task(props) {
  return (
    <div className="task">
      <span>{props.title}</span>
      <span>{props.description}</span>
      <span>{props.status}</span>
    </div>
  );
}

export default Task;
