import React, { Component } from 'react';
import '../style/Warrior.css';
import '../style/App.css';
import { Avatar } from './Avatar/Component';

const Warrior = ({name, position, speed, pose}) => {
 const warriorPosition = {
   top: `${ position.y }px`,
   left: `${ position.x }px`,
 };
  return (
    <div className='Warrior' style={warriorPosition}>
      <Avatar speed={speed} position={pose}/>
      <p>{name}</p>
    </div>
  );
}

export default Warrior;
