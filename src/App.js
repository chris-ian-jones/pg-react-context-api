import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom'
import './App.css';
import User from './components/User'

function App() {
  const [user, setUser] = useState({})
  
  useEffect(() => {
    setUser({ firstName: 'Chris', lastName: 'Jones' })
  }, [])

  return (
    <div className="App">
      <User />
    </div>
  );
}

export default App;
