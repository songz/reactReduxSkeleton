import React, { Component } from 'react';
import '../style/Warrior.css';
import '../style/App.css';
import { Avatar } from './Avatar/Component';

const Warrior = ({name, position, speed, pose, direction}) => {
 const warriorPosition = {
   top: `${ position.y }px`,
   left: `${ position.x }px`,
 };

  let avatarPosition = pose*4 + direction;
  if (avatarPosition > 20) {
    avatarPosition = 20;
  }

  return (
    <div className='Warrior' style={warriorPosition}>
      <Avatar speed={speed} position={avatarPosition}/>
      <p>{name}</p>
    </div>
  );
}

export default Warrior;
