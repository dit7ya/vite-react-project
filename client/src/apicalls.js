import axios from "axios";

const uri = "http://localhost:3001/api";

const createTodo = async (todo) => {
    const res = await axios.post(uri + "/newTodo", todo);
    // console.log(res);
};

const getAllTodos = async () => {
    const todos = await axios.get(uri + "/todos");
    return todos;
};

const updateTodo = async (todo) => {
    const res = await axios.post(uri + "/updateTodo", todo)
}

const removeTodo = async (todoId) => {
    const res = await axios.post(uri + "/deleteTodo", { _id: todoId })

}

export { createTodo, getAllTodos, updateTodo, removeTodo };
