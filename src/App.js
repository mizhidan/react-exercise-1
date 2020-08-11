import React, { Component } from 'react';
import './App.scss';
import Avatar from './components/userinfo/avatar';
import Introduce from './components/userinfo/introduce';
import AboutmeInfo from './components/aboutme/aboutme';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Avatar />
        <Introduce />
        <AboutmeInfo />
      </main>
    );
  }
}

export default App;
