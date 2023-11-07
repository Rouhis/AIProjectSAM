// App.js (React)
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [response, setResponse] = useState('');

  // Function to get the response from your Express server
  const getResponse = async () => {
    try {
      const question = "What is my name?"; // Your question to Bard
      const response = await fetch(`http://localhost:5500/ask-bard?question=${encodeURIComponent(question)}`);
      const data = await response.json();
      setResponse(data.answer);
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse('Failed to get response');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <button onClick={getResponse}>Ask Bard</button>
        <p>Response: {response}</p>
      </header>
    </div>
  );
}

export default App;
