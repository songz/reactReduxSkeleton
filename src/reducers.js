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

const appReducers = combineReducers({
  avatar,
});

export default appReducers;
