import axios from "axios";

let uri;
if (process.env.NODE_ENV == "production") {
    uri = "https://mostlyvoid.xyz/todos/api";

} else if (process.env.NODE_ENV == "development") {
    uri = "http://localhost:3001/api";
} else {
    console.log("Configure NODE_ENV now!");
}

const createTodo = async (todo) => {
    const token = window.localStorage.getItem("token");
    // console.log(token)
    // TODO if this token is null ask user to login
    const res = await axios.post(uri + "/newTodo", todo, {
        headers: { Authorization: "Bearer " + token },
    });
    // console.log(res);
};

const handleRegister = async (values) => {
    const result =
        await axios.post(uri + "/users", {
            ...values,
        });
    return result
}

const handleLogin = async (values) => {
    const result = await axios.post(uri + "/login", {
        ...values,
    });
    return result
}

const getAllTodos = async () => {
    // console.log(process.env.NODE_ENV)
    const token = window.localStorage.getItem("token");
    const todos = await axios.get(uri + "/todos", {
        headers: { Authorization: "Bearer " + token },
    });
    return todos;
};

const updateTodo = async (todo) => {
    const res = await axios.post(uri + "/updateTodo", todo);
};

const removeTodo = async (todoId) => {
    const res = await axios.post(uri + "/deleteTodo", { _id: todoId });
};

export { createTodo, getAllTodos, updateTodo, removeTodo, handleRegister, handleLogin };
