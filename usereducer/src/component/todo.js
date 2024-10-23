import React, { useReducer, useState } from 'react';

// Reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'toggle':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'remove':
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

// Initial state
const initialTodos = [];

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    dispatch({ type: 'add', text: newTodo });
    setNewTodo('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            {todo.text}
            <button onClick={() => dispatch({ type: 'toggle', id: todo.id })}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => dispatch({ type: 'remove', id: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;