import React from "react";
import "./App.css";
import AddBook from "./components/AddBook";
import ListBooks from "./components/ListBooks";

function App() {
  return (
    <div className="App">
      <AddBook />
      <ListBooks />
    </div>
  );
}

export default App;
