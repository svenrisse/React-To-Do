function Todo(props) {

    return (
        <div className="todo">
            <div className="todo__info">
                <span>{props.title}</span>
                <span>{props.description}</span>
            </div>
        </div>
    )
}

export default Todo;