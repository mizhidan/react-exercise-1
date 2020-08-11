import React, { Component } from 'react';
import './App.scss';
import Avatar from './components/userinfo/avatar';
import Introduce from './components/userinfo/introduce';
import AboutmeInfo from './components/aboutme/aboutme';
import Educations from './components/educations/educatioins';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Avatar />
        <Introduce />
        <AboutmeInfo />
        <Educations />
      </main>
    );
  }
}

export default App;
