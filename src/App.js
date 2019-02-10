import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
