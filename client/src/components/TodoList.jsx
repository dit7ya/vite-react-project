import React, { useState } from "react";
import TodoInputBox from "./TodoInputBox.jsx";
import TodoItem from "./TodoItem";
import Filter from "./Filter";

const TodoList = () => {
    const [filterState, setFilterState] = useState("all");
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
        console.log(todos);
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter((x) => x.id !== id);
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
        <div className="text-gray-800">
            <TodoInputBox handleEnter={addTodo} />

            <Filter handleFilterState={setFilterState} />

            <div className="mt-4 rounded shadow divide-y divide-purple-100 ">
                {todos
                    .filter((todo) => {
                        /* console.log */
                        if (filterState === "incomplete") {
                            return !todo.isDone;
                        } else if (filterState === "completed") {
                            return todo.isDone;
                        } else {
                            return true;
                        }
                    })
                    .map((todo) => (
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
