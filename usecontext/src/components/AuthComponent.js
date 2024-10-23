import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


function Login() {
  const { login, user } = useContext(AuthContext);

  const handleLogin = () => {
    login('Sai Kumar');  
  };

  return (
    <div>
      {user ? <p>Welcome, {user.name}!</p> : <p>Please log in</p>}
      {!user && <button onClick={handleLogin}>Login</button>}
    </div>
  );
}

function Logout() {
  const { logout, user } = useContext(AuthContext);

  return (
    <div>
      {user && <button onClick={logout}>Logout</button>}
    </div>
  );
}

export { Login, Logout };
