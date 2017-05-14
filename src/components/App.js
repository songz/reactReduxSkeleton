import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import { Avatar } from './Avatar/Component';
import '../style/App.css';

const App = ({position, changeIndex, speed, avatarId=Date.now()}) => {
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

  return (
<div className="App">
  <Avatar speed={10} position={position}/>
  {buttons}
</div>
  );
}

export default App;
