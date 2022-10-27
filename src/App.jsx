import React, { useState } from "react";
import Addsection from "./components/Addsection";
import Todo from "./components/Todo";

function App() {
    const [tasks, setTasks] = useState([]);

    const toDos = tasks.map(task => {
        return <Todo 
                    key={tasks.indexOf(task)}
                    title={task.title}
                    description={task.description}
                />
    })
    return (
        <div className="app-container">
            <div className="topbar">
                <Addsection tasks={tasks} setTasks={setTasks} />
            </div>
            <div className="tasks-container">
                {toDos}
            </div>
        </div>
    );
}

export default App;
