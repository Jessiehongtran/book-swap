import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Books from './components/Books'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Books/>
    </div>
  );
}

export default App;
