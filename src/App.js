import React from 'react';
import './App.css';
import Header from "./components/Header";
import MainToDoList from "./components/to-do-list";

function App() {
  return (
    <div className="App">
        <Header/>
        <MainToDoList/>
    </div>
  );
}
export default App;
