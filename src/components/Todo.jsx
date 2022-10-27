function Todo(props) {
    return (
        <div className="todo">
            <div className="todo__info">
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
