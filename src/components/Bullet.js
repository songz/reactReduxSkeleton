import React, { Component } from 'react';
import '../style/Warrior.css';

const Bullet = ({position}) => {
 const warriorPosition = {
   top: `${ position.y }px`,
   left: `${ position.x }px`,
 };
  return (
    <div className='Bullet' style={warriorPosition}>
      <img src='/Bullet.png' />
    </div>
  );
}

export default Bullet;

