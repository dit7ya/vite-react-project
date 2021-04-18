import React, { useState } from "react";
import TodoInputBox from "./TodoInputBox.jsx";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
        console.log(todos);
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter((x) => x.id !== id)
        setTodos(newTodos);
    };


    const toggleTodo = (id) => {
        const newTodos = todos.map((x) => {
            if (x.id === id) {
                return { ...x, isDone: !x.isDone };
            } else {
                return x;
            }
        });
        setTodos(newTodos);
    };

    return (
        <div className="">
            <TodoInputBox handleEnter={addTodo} />
            <div className="mt-6 border-solid border">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        isDone={todo.isDone}
                        text={todo.text}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
