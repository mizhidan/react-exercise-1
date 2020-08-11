import React, { Component } from 'react';
import './App.scss';
import Avatar from './components/avatar';
import Introduce from './components/introduce';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Avatar />
        <Introduce />
      </main>
    );
  }
}

export default App;
