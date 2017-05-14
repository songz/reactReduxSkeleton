import { combineReducers } from 'redux';

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

const move = (warrior, direction) => {

  switch(direction) {
    case 'ArrowUp':
      warrior.position.y = warrior.position.y - 1;
      warrior.direction = 0;
      return warrior;
    case 'ArrowDown':
      warrior.position.y = warrior.position.y + 1;
      warrior.direction = 2;
      return warrior;
    case 'ArrowLeft':
      warrior.position.x = warrior.position.x - 1;
      warrior.direction = 1;
      console.log('left', warrior.position.x);
      return warrior;
    case 'ArrowRight':
      warrior.position.x = warrior.position.x + 1;
      warrior.direction = 3;
      return warrior;
  }
    return warrior;
}
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
  switch (action.type) {
    case 'AVATAR_MOVE':
      const newState = Object.assign({}, state);
      newState.warriors[action.id]= move(state.warriors[action.id], action.direction);
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
