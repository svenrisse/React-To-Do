import React from "react";

function Task(props) {
  return (
    <div className="task">
      <h1 className="task--header">{props.title}</h1>
      <p className="task--description">{props.description}</p>
    </div>
  );
}

export default Task;
