import axios from 'axios';

let uri;
if (process.env.NODE_ENV === 'production') {
  uri = 'https://mostlyvoid.xyz/todos/api';
} else if (process.env.NODE_ENV === 'development') {
  uri = 'http://localhost:3001/api';
} else {
  console.log('Configure NODE_ENV now!');
}

// TODO All the api calls should return Promises

const createTodo = async (todo) => {
  const token = window.localStorage.getItem('token');
  // console.log(token)
  // TODO if this token is null ask user to login
  const res = await axios.post(uri + '/newTodo', todo, {
    headers: { Authorization: 'Bearer ' + token }
  });
};

const handleRegister = async (values) => {
  const result =
        await axios.post(uri + '/users', {
          ...values
        });
  return result;
};

const handleLogin = async (values) => {
  const result = await axios.post(uri + '/login', {
    ...values
  });
  return result;
};

const getAllTodos = async () => {
  const token = window.localStorage.getItem('token');
  const todos = await axios.get(uri + '/todos', {
    headers: { Authorization: 'Bearer ' + token }
  });
  return todos;
};

const updateTodo = async (todo) => {
  const token = window.localStorage.getItem('token');
  const res = await axios.post(uri + '/updateTodo', todo, {
    headers: { Authorization: 'Bearer ' + token }
  });
};

const removeTodo = async (todoId) => {
  const token = window.localStorage.getItem('token');
  const res = await axios.post(uri + '/deleteTodo', { _id: todoId }, {
    headers: { Authorization: 'Bearer ' + token }
  });
};

export { createTodo, getAllTodos, updateTodo, removeTodo, handleRegister, handleLogin };
