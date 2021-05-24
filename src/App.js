import React from 'react';
import Todo from './components/Todo';
import './App.css';
import Container from '@material-ui/core/Container'



function App() {
  return (
    <div className="App">
      <Container maxWidth='md' >
        <h1>Todo-App 🚀 </h1>
        <Todo />
      </Container>
      
    </div>
  );
}

export default App;
