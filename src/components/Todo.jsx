import { useEffect, useState } from "react";

function Todo(props) {

    const [todoClass, setTodoClass] = useState("todo__info");
    const [status, setStatus] = useState(false);

    function changeStatus() {
        setStatus(prevState => !prevState);
    }

    useEffect(() => {
        const temp = status ? "todo__info-done" : "todo__info";
        setTodoClass(temp);
    }, [status])

    return (
        <div className="todo">
            <div className={todoClass} onClick={changeStatus}>
                <span className="todo__title">{props.title}</span>
                <span className="todo__description">{props.description}</span>
            </div>
            <button id={props.id} onClick={props.handleClick} className="todo__button">
                -
            </button>
        </div>
    );
}

export default Todo;
