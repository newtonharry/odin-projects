import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Library } from "./components/Library";
import { LocalLibrary } from "@material-ui/icons";

function App() {
  return (
    <div className="app">
      <div className="header">
        <LocalLibrary />
        <h1>Library</h1>
      </div>
      <div className="library">
        <Library />
      </div>
    </div>
  );
}

export default App;
