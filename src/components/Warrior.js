import React, { Component } from 'react';
import '../style/Warrior.css';
import '../style/App.css';

const Warrior = ({position}) => {
 const warriorPosition = {
   background: 'red',
   top: `${ position.y }px`,
   left: `${ position.x }px`,
 };
  return (
    <div className='Warrior' style={warriorPosition}></div>
  );
}

export default Warrior;
