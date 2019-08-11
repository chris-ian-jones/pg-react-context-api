import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom'
import './App.css';
import User from './components/User'
import { UserContext } from './contexts/UserContext';

function App() {
  const [user, setUser] = useState({})
  
  useEffect(() => {
    setUser({ firstName: 'Chris', lastName: 'Jones' })
  }, [])

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <User />
      </div>
    </UserContext.Provider>
  );
}

export default App;
