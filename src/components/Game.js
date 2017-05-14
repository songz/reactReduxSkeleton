import React, { Component } from 'react';

const Game = ({ id, onKeyDown, positionX, positionY }) => {
  return (
    <div className="board">
      { positionX }
      { positionY }
    </div>
  )
}

export default Game
