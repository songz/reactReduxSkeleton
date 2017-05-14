import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import { Avatar } from './Avatar/Component';
import '../style/App.css';
import { setWarriorsProperty, createWarrior, setBulletProperty,
createBullet, bindWarriorChanges, bindBulletChanges, removeWarriors, removeBullets } from '../db';
import { generateHomeContainer } from '../containers/Home';
import { generateGameContainer } from '../containers/Game';
import Game from './Game';

const GameContainer = generateGameContainer(Game);

const App = ({ position, changeIndex, speed, avatarId=Date.now(), updatePhysics,
name, editUserInfo, saveUserInfo, id, onKeyDown}) => {

    document.addEventListener("keydown", (event) => { onKeyDown(id, event) });
  return (
  <div className="row">
    <label htmlFor="name">SIGN UP:</label>
    <input placeholder="Big Head" value = { name }
      onChange = { (v) => { editUserInfo('name', v.target.value); } }/>
    <button onClick = { () => {
        saveUserInfo(name);
      }}>START</button>
    <button onClick = { () => {
      removeWarriors();
      removeBullets();
    }}>RE-START</button>
    <div className="board">
      <GameContainer/>
    </div>
  </div>
  );
}

export default App;
