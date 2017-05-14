import { combineReducers } from 'redux';
import { setWarriorsProperty } from './db';

const avatar = (state = {
  position: 0,
  speed: 1,
  name: '',
}, action) => {
  switch (action.type) {
    case 'AVATAR_POSITION_CHANGE':
      return Object.assign({}, state, {
        position: action.position
      });

    case 'AVATAR_SPEED_CHANGE':
      return Object.assign({}, state, {
        position: action.position
      });

    case 'UPDATE_PHYSICS':
       console.log('Update Physics');

    case 'USER_INFO_SAVED':
      return Object.assign({}, state, {
        name: action.name
      });

    case 'EDIT_USER_INFO':
      const newState = {};
      newState[action.editField] = action.value;
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

const game = (state = {
  warriors: {
    0: {
      position: {
        x: 10,
        y: 10
      },
      direction: 0
    }
  }
}, action) => {
  let newState = {};
  switch (action.type) {
    case 'AVATAR_MOVE':
      newState = Object.assign({}, state);
      newState.warriors[action.id]= action.data;
      return newState;
    case 'WARRIOR_UPDATE':
      newState = Object.assign({}, { warriors: action.data });
      return newState;
    default:
      return state;
  }
};


const id = (state = 0, action) => {
  switch (action.type) {
    case 'GAME_JOINED':
      return action.id
    default:
      return state;
  }
};

const appReducers = combineReducers({
  game,
  id,
  avatar
});

export default appReducers;
