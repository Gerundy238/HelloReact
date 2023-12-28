import React from 'react';
import './App.css';

function App() {
  const textStyle = {
    color: 'blue',
    };
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={textStyle}>Hello World!</h1>
      </header>
    </div>
  );
}

export default App;
