import React from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import TodoApp from './component/todo';
import Form from './component/form';
import Counter from './component/counter';


// Home component with navigation buttons
function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/todo')}>Todo App</button>
      <button onClick={() => navigate('/form')}>Form</button>
      <button onClick={() => navigate('/counter')}>Counter</button>
    </div>
  );
}

// Back button component
function BackButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/')}>Back to Home</button>
  );
}

// Main App component with routing setup
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<div><TodoApp /> <BackButton /></div>} />
        <Route path="/form" element={<div><Form /><BackButton /></div>} />
        <Route path="/counter" element={<div><Counter /><BackButton /></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
