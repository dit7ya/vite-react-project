import React, { useState } from "react";
import TodoInputBox from "./TodoInputBox.jsx";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
        console.log(todos);
    };

    const toggleTodo = (id) => {
        const newTodos = todos.map(x => {
            if (x.id === id) {
                return { ...x, isDone: !x.isDone }
            } else {
                return x
            }

        })
        // console.log({ newTodos })
        setTodos(newTodos)
        // console.log(todo)
        // console.log("working?")
    }

    return (
        <div>
            <TodoInputBox handleEnter={addTodo} />
            <div className="mt-6">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} id={todo.id} isDone={todo.isDone} text={todo.text} toggleTodo={toggleTodo} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
