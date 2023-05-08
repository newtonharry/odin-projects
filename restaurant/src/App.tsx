import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2>
          <Link to="/" className="link">
            Home
          </Link>
        </h2>
        <h2>
          <Link to="/menu" className="link">
            Menu
          </Link>
        </h2>
        <h2>
          <Link to="/about" className="link">
            About
          </Link>
        </h2>
      </div>
      <div className="body">
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
