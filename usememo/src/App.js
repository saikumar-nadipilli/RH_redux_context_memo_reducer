import React from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import ExpensiveCalculation from './components/expensiveCalculations';
import UserList from './components/filter';
import InventoryApp from './components/dataset';
import WOMInventoryApp from './components/withoutMemo';


// Home component with navigation buttons
function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/counter')}>Expensive Calulatation</button>
      <button onClick={() => navigate('/filter')}>Use List</button>
      <button onClick={() => navigate('/dataset')}>Invertory App</button>
      <button onClick={() => navigate('/wom')}>Without Memo Invertory App</button>
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
        <Route path="/counter" element={<div><ExpensiveCalculation /> <BackButton /></div>} />
        <Route path="/filter" element={<div><UserList /><BackButton /></div>} />
        <Route path="/dataset" element={<div><InventoryApp /><BackButton /></div>} />
        <Route path="/wom" element={<div><WOMInventoryApp /><BackButton /></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
