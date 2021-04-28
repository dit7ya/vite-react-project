import React, { useState } from "react";
// import logo from './logo.svg'
import "./App.css";
import TodoList from "./components/TodoList.jsx";
// import Auth from './components/auth/Auth';
import Login from "./routes/Login.jsx";
import Profile from "./routes/Profile.jsx"
import Register from "./routes/Register.jsx"

import { UserContext } from "./UserContext.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);


  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <Router>
          <div className="p-6 subpixel-antialiased sm:w-1/2 m-auto">
            <nav className="flex justify-between pb-4">
              <div className="bg-purple-200 rounded pl-1 pr-1">
                <Link to="/">Home</Link>
              </div>
              <div className="bg-purple-200 rounded pl-1 pr-1">
                <Link to="/login">Account</Link>
              </div>

            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/">
                <TodoList />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </UserContext.Provider>

    // <Router>

    //   <div className="p-6 subpixel-antialiased">
    //     <div className="sm:w-1/2 m-auto">
    //       <nav className="flex justify-between">
    //         <h1 className="text-xl text-purple-300 font-bold self-center" > Todos App </h1>
    //         <div className="">
    //           {/* <Auth /> */}
    //           <Link to="/login">Login</Link>
    //         </div>
    //       </nav>

    //       <TodoList />

    //     </div>
    //   </div >
    // </Router>
  );
}

export default App;
