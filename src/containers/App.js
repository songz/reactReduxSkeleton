import { connect } from 'react-redux';
import { saveUserInfo, editUserInfo } from '../actions/App';
import { createWarrior, setWarriorsProperty, bindWarriorChanges } from '../db';
import { getRandomX, getRandomY, getRandomDirection } from '../helper';

const STEP = 20;
const move = (warrior, direction) => {
  console.log('direction', direction);
  let speed = 5;
  switch(direction) {
    case 'ArrowUp':
      warrior.position.y = warrior.position.y - STEP;
      warrior.direction = 0;
      return warrior;
    case 'ArrowDown':
      warrior.position.y = warrior.position.y + STEP;
      warrior.direction = 2;
      return warrior;
    case 'ArrowLeft':
      warrior.position.x = warrior.position.x - STEP;
      warrior.direction = 1;
      return warrior;
    case 'ArrowRight':
      warrior.position.x = warrior.position.x + STEP;
      warrior.direction = 3;
      return warrior;
    case '1':
      warrior.pose = 0;
      return warrior;
    case '2':
      warrior.pose = 1;
      console.log('returning warrior', warrior);
      return warrior;
    case '3':
      warrior.pose = 2;
      return warrior;
    case '4':
      warrior.pose = 3;
      return warrior;
    case '5':
      warrior.pose = 4;
      return warrior;
    case '6':
      warrior.pose = 5;
      return warrior;
    case '9':
      speed = parseInt(warrior.speed) || 5;
      speed -= 1;
      warrior.speed = speed <= 0 ? 0 : speed;
      warrior.speed = speed >= 10 ? 10 : speed;
      return warrior;
    case '0':
      speed = parseInt(warrior.speed) || 5;
      speed += 1;
      warrior.speed = speed <= 0 ? 0 : speed;
      warrior.speed = speed >= 10 ? 10 : speed;
      return warrior;
  }
  return warrior;
}

const generateAppContainer= connect((state) => {
  return {
    id: state.id,
    name: state.avatar.name,
  }
}, (dispatch) => {
  bindWarriorChanges((warriors) => {
    dispatch({
      type: 'WARRIOR_UPDATE',
      data: warriors,
    });
  });
  return {
    onKeyDown: (id, event) => {
      dispatch((dispatch, getState) => {
        let warrior = getState().game.warriors[id];
        warrior =  move(warrior, event.key);
        console.log('WARRIOR', warrior);
        setWarriorsProperty(id, warrior);

        dispatch({
          type: 'AVATAR_MOVE',
          data: warrior,
          id
        });
      });
    },
    updatePhysics: () => {
      dispatch({
        type: 'UPDATE_PHYSICS'
      });
    },
    saveUserInfo: (name) => {
      createWarrior({
        name: name,
        position: {
          x: getRandomX(),
          y: getRandomY(),
        },
        direction: getRandomDirection()
      });
      dispatch({
        type: 'GAME_JOINED',
        id: name,
      });
    },
    editUserInfo: (editField, value) => {
      dispatch(editUserInfo(editField, value));
    },
}});

export { generateAppContainer};
