import './App.css';
import NewTodo from './NewTodo';
import React, { useState, useEffect } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  const handleAddTodo = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      const newTodo = { id: Date.now(), text: inputValue };
      setTodos(prevTodos => [...prevTodos, newTodo]);
      setInputValue('');
      localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div className="container border p-3">
      <h1 className='text-center m-3'>¡Todo List! 🙃</h1>
      <div className="bg-primary" style={{ borderRadius: '10px', border: 'solid 3px', width: '370px', padding: '5px' }}>
        <input
          type="text"
          placeholder='   Escribe aquí la tarea'
          style={{ width: '290px', textAlign: 'center' }}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleAddTodo}
        />
      </div>

      {/* Renderizar la lista de todos */}
      {todos.length === 0 ? (
        <p>No hay tareas, añadir tareas</p>
      ) : (
        todos.map(todo => (
          <div key={todo.id} className="todo-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <NewTodo textProper={todo.text} />
            <button onClick={() => handleDeleteTodo(todo.id)}>x</button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
