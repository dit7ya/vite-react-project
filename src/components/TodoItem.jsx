import React from 'react'
const TodoItem = (props) => {
    return (
        <div className="flex">
            <input
                type="checkbox"
                checked={props.isDone}
                onChange={() => props.toggleTodo(props.id)}
            /* onClick={toggleTodo} */
            />
            <h1 className={"pl-2 border-b " + (props.isDone ? "line-through italic text-gray-500" : "")}>{props.text}</h1>
        </div>

    )
}

export default TodoItem
