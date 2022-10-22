import React from "react";
import Task from "./components/Task";
import Add from "./components/Add";

function App() {
  const tasks = [
    {
      title: "Water the flowers",
      description: "It's important to take care of nature"
    },
    {
      title: "Water the flowers",
      description: "It's important to take care of nature"
    },
    {
      title: "Water the flowers",
      description: "It's important to take care of nature"
    }
  ]

  const toDos = tasks.map(todo => 
      <Task title={todo.title} description={todo.description} />
    )

  return (
    <div>
      <div className="navbar">
        <h1>Home</h1>
      </div>

      <Add />

      <div className="categories">

      </div>

      <div className="tasks">
        {toDos}
      </div>

    </div>
  );
}

export default App;
