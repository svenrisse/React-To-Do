import React from "react";
import Task from "./components/Task";

function App() {


  return (
    <div>
      <div className="navbar">
        <h1>Home</h1>
      </div>
      <div className="addSection">

      </div>
      <div className="categories">

      </div>
      <div className="tasks">
        <Task title="Water the flowers" description="It's important to take care of nature"></Task>
      </div>

    </div>
  );
}

export default App;
