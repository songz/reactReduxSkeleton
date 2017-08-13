import React, { Component } from 'react';

const spriteHeight = 64;
const spriteWidth = 64;

const spriteMap = {
  0: 7,
  1: 7,
  2: 7,
  3: 7,
  4: 8,
  5: 8,
  6: 8,
  7: 8,
  8: 9,
  9: 9,
  10: 9,
  11: 9,
  12: 6,
  13: 6,
  14: 6,
  15: 6,
  16: 13,
  17: 13,
  18: 13,
  19: 13,
  20: 6,
};

const Avatar = ({position, speed, avatarPath='/avatar.png', avatarId=Date.now()}) => {
  const speedTime = 5/speed;

  let styleSheet = document.styleSheets[0];
  const steps = spriteMap[position];

  const style = {
    animation: `play${position}aid${avatarId} ${speedTime}s steps(${steps}) infinite`,
    width: '64px',
    height: '64px',
    background: `url(${avatarPath})`,
  };

  const choices = new Array(21);
  choices.fill(1);
  choices.forEach( (e, i) => {
    let keyframes = `
      @keyframes play${i}aid${avatarId} {
        from { background-position: 0px -${i*spriteHeight}px; }
        to { background-position: -${steps*spriteWidth}px -${i*spriteHeight}px; }
      }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  });

  return (
    <div className="avatar" style={style}> </div>
  );
};

export { Avatar };
