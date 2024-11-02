import logo from './logo.svg';
import './App.css';
import React from 'react';
import Student from './components/Student';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Student studentID="101104521" studentName="Daekyung Park"/>
        
        
      </header>
    </div>
  );
}

export default App;
