import React, { useState } from "react";
import Addsection from "./components/Addsection";

function App() {
    const [tasks, setTasks] = useState([]);

    return (
        <div className="app-container">
            <div className="topbar">
                <Addsection tasks={tasks} setTasks={setTasks} />
            </div>
            <div className="tasks-container"></div>
        </div>
    );
}

export default App;
