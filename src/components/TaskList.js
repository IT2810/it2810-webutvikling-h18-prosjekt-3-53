import React from "react";

// import the Contact component
import Contact from "./Task";


function TaskList(props) {
  return (
    <div>
      {props.tasks.map(task => <Task key={task.id} title={task.title} description={task.description} status={task.status} />)}
     </div>
  );
}

export default TaskList;
