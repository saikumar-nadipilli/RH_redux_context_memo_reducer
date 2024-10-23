import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { Login, Logout } from './components/AuthComponent';



function App() {
  return (
    <AuthProvider>
      <Login/>
      <Logout />
    </AuthProvider>
  );
}

export default App;
