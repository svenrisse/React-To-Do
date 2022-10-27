function Todo(props) {
    return (
        <div className="todo">
            <div className="todo__info">
                <span>{props.title}</span>
                <span>{props.description}</span>
            </div>
            <button id={props.id} onClick={props.handleClick}>
                Remove
            </button>
        </div>
    );
}

export default Todo;
