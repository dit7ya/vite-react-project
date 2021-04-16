import React from 'react'
// import logo from './logo.svg'
import './App.css'
import TodoList from './components/TodoList.jsx'

function App() {

  return (
    // <div className="p-6 rounded-xl items-center space-x-4">
    <div className="p-6 rounded-xl">
      <h1 className="text-red-300 text-xl pb-6 font-bold" > Todos App </h1>
      <TodoList />

    </div>
  )
}

export default App
