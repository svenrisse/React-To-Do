import React from "react";
import Task from "./components/Task";
import Add from "./components/Add";

function App() {


  return (
    <div>
      <div className="navbar">
        <h1>Home</h1>
      </div>

      <Add />

      <div className="categories">

      </div>

      <div className="tasks">
        <Task title="Water the flowers" description="It's important to take care of nature"></Task>
      </div>

    </div>
  );
}

export default App;
