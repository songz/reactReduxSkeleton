import React, { Component } from 'react';
import Warrior from './Warrior';
import '../style/Arena.css';

const Game = ({ warriors, onKeyDown }) => {
  console.log('WARRIORS', warriors);
  const warriorComponents = [];
  for(let k in warriors) {
    const warrior = warriors[k];
    console.log("WARRIOR," + k, warrior);
    if (warrior && warrior.position) {
      console.log('should be pushing');
      const speed = warrior.speed || 4;
      const pose = warrior.pose || 1;
      warriorComponents.push(
        <Warrior name={k} 
          position={warrior.position}
          speed={speed}
          pose={pose}
          direction={warrior.direction}
        />
      );
    }
  }
  console.log('WARRIOR COMPONENTS', warriorComponents.length);
  return (
<div className="Game-layout">
  <div className="Game-container">
    <div className="Game-arena">
      {warriorComponents}
    </div>
  </div>
</div>
  )
}

export default Game
