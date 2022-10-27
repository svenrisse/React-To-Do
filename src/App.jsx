import React, { useState, useEffect } from "react";
import Addsection from "./components/Addsection";
import Todo from "./components/Todo";

function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    });

    const toDos = tasks.map(task => {
        return <Todo 
                    key={tasks.indexOf(task)}
                    title={task.title}
                    description={task.description}
                    handleClick={deleteTodo}
                />
    })

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(tasks));
    }, [tasks])

    function deleteTodo(title) {
        console.log(title)
    }

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
