import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../style/App.css';

const App = ({ name }) => {
  return (
      <div className="App">
        <p className="App-intro">
          Hi {name}! To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
  );
}

export default App;
