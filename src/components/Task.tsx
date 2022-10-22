import React from "react";

function Task(props) {
  return (
    <div className="task">
      <span className="task--header">{props.title}</span>
      <span className="task--description">{props.description}</span>
    </div>
  );
}

export default Task;
