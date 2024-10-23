import React, { createContext, useState } from 'react';

// Create a context for authentication
const AuthContext = createContext();

function AuthProvider({ children }) {
  // State to manage user authentication
  const [user, setUser] = useState(null);

  // Function to log in (set a user)
  const login = (username) => {
    setUser({ name: username });
  };

  // Function to log out (clear the user)
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
