import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import { Avatar } from './Avatar/Component';
import '../style/App.css';
import { setWarriorsProperty, createWarrior, setBulletProperty,
createBullet, bindWarriorChanges, bindBulletChanges, removeWarriors, removeBullets } from '../db';
import { generateHomeContainer } from '../containers/Home';

const App = ({ position, changeIndex, speed, avatarId=Date.now(), updatePhysics,
name, editUserInfo, saveUserInfo }) => {
  const buttons = [];
  const choices = new Array(21);
  choices.fill(1);
  choices.forEach( (e, i) => {
    buttons.push(
      <div>
        <button key={i} onClick={() => { changeIndex(avatarId, i); }}>{i}</button>
      </div>
    );
  });
  // setInterval(() => {
    // updatePhysics();
  // }, 1000);
  return (
  <div className="row">
  <div className="form-group">
  <label htmlFor="name">SIGN UP:</label>
  <input placeholder="Big Head" value = { name }
  onChange = { (v) => { editUserInfo('name', v.target.value); } }/>
  </div>
  <div className="row text-center">
  <button onClick = { () => {
      saveUserInfo(name);
    }}>START</button>
  </div>
  <div className="row text-center">
  <button onClick = { () => {
      removeWarriors();
      removeBullets();
    }}>RE-START</button>
  </div>
  );
}

export default App;
