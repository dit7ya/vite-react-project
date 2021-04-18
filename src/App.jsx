import React from 'react'
// import logo from './logo.svg'
import './App.css'
import TodoList from './components/TodoList.jsx'
import Auth from './components/auth/Auth';


function App() {

  return (
    <div className="p-6">
      <div className="sm:w-1/2 m-auto">
        <nav className="flex justify-between">
          <h1 className="text-purple-300 font-bold self-center" > Todos App </h1>
          <div className="">
            <Auth />
          </div>
        </nav>

        <TodoList />

      </div>
    </div >
  )
}

export default App
