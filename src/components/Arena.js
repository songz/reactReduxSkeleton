import React, { Component } from 'react';
import '../style/Arena.css';

const Arena = ({position, changeIndex, speed, avatarId=Date.now()}) => {

  return (
<div className="Game-layout">
  <div className="Game-container">
    <div className="Game-arena">
    </div>
  </div>
</div>
  );
}

export default Arena;

