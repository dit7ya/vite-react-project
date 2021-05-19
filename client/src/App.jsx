import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList.jsx';
import Login from './routes/Login.jsx';
// import Profile from "./routes/Profile.jsx"
import Register from './routes/Register.jsx';

import { UserContext } from './UserContext.js';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App () {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <Router>
          <div className='mt-6 p-6 shadow subpixel-antialiased sm:w-1/2 m-auto'>
            <nav className='flex justify-between border rounded mb-8 p-2'>
              <div className='bg-purple-200 rounded pl-1 pr-1 text-sm text-gray-700'>
                <Link to='/'>Home</Link>
              </div>
              <div className='bg-purple-200 rounded pl-1 pr-1 text-sm text-gray-700'>
                <Link to='/login'>Account</Link>
              </div>
            </nav>

            <Switch>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/register'>
                <Register />
              </Route>
              <Route path='/'>
                <TodoList />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
