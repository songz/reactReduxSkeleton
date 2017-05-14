import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import { Avatar } from './Avatar/Component';
import '../style/App.css';
import Warrior from './Warrior.js'
import Bullet from './Bullet.js'

const App = ({}) => {
  let position = {
    x: 100,
    y: 200
  }
  let position2 = {
    x: 1000,
    y: 200
  }
  let position3 = {
    x: 300,
    y: 300
  }
  let position4 = {
    x: 900,
    y: 300
  }
  return (
<div className="App">
  <Warrior position={position} speed={10} pose={9} name={'Daniel'}/>
  <Warrior position={position2} speed={5} pose={5} name={'Maricris'}/>
  <Bullet position={position3}/>
  <Bullet position={position4}/>
</div>
  );
}

export default App;
