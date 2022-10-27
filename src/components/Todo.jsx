function Todo(props) {

    return (
        <div className="todo">
            <div className="todo__info">
                <span>{props.title}</span>
                <span>{props.description}</span>
            </div>
            <button onClick={() => props.handleClick(props.title)}>Remove</button>
        </div>
    )
}

export default Todo;