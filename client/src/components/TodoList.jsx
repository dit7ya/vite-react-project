import React, { useState, useEffect } from "react";
import TodoInputBox from "./TodoInputBox.jsx";
import TodoItem from "./TodoItem";
import Filter from "./Filter";

import { createTodo, getAllTodos, updateTodo, removeTodo } from '../apicalls.js'

const TodoList = () => {
    const [filterState, setFilterState] = useState("all");
    const [todos, setTodos] = useState([]);


    useEffect(() => {
        getAllTodos().then((res) => setTodos(res.data))

    }, []);


    const addTodo = (todo) => {
        setTodos([...todos, todo]);
        createTodo(todo).then(console.log)
        // console.log(todos);
    };

    const deleteTodo = (_id) => {
        const newTodos = todos.filter((x) => x._id !== _id);
        setTodos(newTodos);
        console.log("Todolist is sending ", _id)
        removeTodo(_id).then(console.log)
    };

    const toggleTodo = (_id) => {

        const newTodos = todos.map((x) => {
            if (x._id === _id) {
                return { ...x, isDone: !x.isDone };
            } else {
                return x;
            }
        });
        setTodos(newTodos);

        const updatedTodo = todos.find(x => x._id === _id)
        // console.log(!updatedTodo["isDone"])
        // console.log(updatedTodo)
        updatedTodo["isDone"] = !updatedTodo["isDone"]
        updateTodo(updatedTodo).then(console.log)
    };

    return (
        <div className="text-gray-800">
            <TodoInputBox handleEnter={addTodo} />

            <Filter handleFilterState={setFilterState} />

            <div className="mt-4 rounded shadow div_ide-y div_ide-purple-100 ">
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
                            key={todo._id}
                            _id={todo._id}
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
