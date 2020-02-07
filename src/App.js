import React from 'react';
import './App.css';
import TodoList from "../src/components/TodoList"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Tarefas</h1>
      </header>
      <TodoList/>
    </div>
  );
}

export default App;
