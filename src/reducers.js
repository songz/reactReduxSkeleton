import { combineReducers } from 'redux';

const avatar = (state = {
  position: 0,
  speed: 1
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
    default:
      return state;
  }
};

const appReducers = combineReducers({
  avatar,
});

export default appReducers;

