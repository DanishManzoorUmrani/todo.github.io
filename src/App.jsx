
import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoArray, setTodoArray] = useState([]);

  const addTodo = () => {
    if (todo.trim()) {
      setTodoArray([...todoArray, todo]);
      setTodo("");
    }
  };

  const clearAll = () => {
    setTodoArray([]);
  };

  const deleteItem = (index) => {
    setTodoArray(todoArray.filter((_, i) => i !== index));
  };

  return (
    <div className="todo">
      <div className="todoinput">
        <h1>Todo App</h1>
        <div className='todovalue'>
          <input
            type="text"
            placeholder='Items'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={addTodo}>Add</button>
          <button onClick={clearAll}>Delete All</button>
        </div>
        {todoArray.map((item, index) => (
          <div className="arry" key={index}>
            <p>{item}</p>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
