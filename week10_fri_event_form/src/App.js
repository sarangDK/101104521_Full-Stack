import logo from './logo.svg';
import './App.css';
import React from 'react';
import Student from './components/student.component';
import Employee from './components/employee.component';



function App() {
  return (
    <div>
      <h1>React Forms and Events</h1>
      <Student />
      <hr/>
      <Employee />
    </div>
  );
}

export default App;
