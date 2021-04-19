import React from "react";
import CloseIcon from "./closeIcon";

const TodoItem = (props) => {
    return (
        <div className="flex justify-between pl-2 pr-2 p-1">
            <div className="flex">
                <input
                    type="checkbox"
                    checked={props.isDone}
                    onChange={() => props.toggleTodo(props.id)}
                />
                <h1
                    className={
                        "pl-2 " + (props.isDone ? "line-through italic text-gray-500" : "")
                    }
                >
                    {props.text}
                </h1>
            </div>

            <div>
                <button
                    className="focus:outline-none text-gray-300 hover:text-red-600 transform motion-safe:hover:scale-120 "
                    onClick={() => props.deleteTodo(props.id)}
                >
                    <CloseIcon />
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
