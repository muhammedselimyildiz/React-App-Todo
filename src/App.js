import React, { useState, useEffect, useRef } from 'react';
import TodoList from './components/todoList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useTodoLayerValue } from './context/todoContext';
import './App.css';

const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (content) {
      const newTodo = {
        id: Math.floor(Math.random() * 39399393),
        content,
        isCompleted: false,
      };

      dispatch({
        type: 'ADD_TODO',
        payload: newTodo,
      });

      setContent('');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={content}
          className="todo-input"
          placeholder="What are you doing to do?"
          ref={inputRef}
          onChange={(event) => setContent(event.target.value)}
        />

        <button className="todo-button">Insert</button>
      </form>
      <TodoList todos={todos} />
      <div class="row">
        <div class="md-col-4">
          <button className="bottom-button">Clear All</button>
          <button className="bottom-button">Remove All</button>
          <button className="bottom-button">Summary</button>
        </div>
      </div>
      
    </div>
  );
};

export default App;