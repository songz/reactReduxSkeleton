import { connect } from 'react-redux';
import { saveUserInfo, editUserInfo } from '../actions/App';
import { createWarrior } from '../db';

const generateHomeContainer = connect((state) => {
  return {
    position: state.avatar.position || 0,
    name: state.avatar.name,
  }
}, (dispatch) => {
  return {
    onKeyDown: (event) => {
      dispatch({
        type: 'AVATAR_MOVE',
        direction: event.key
      })
    },
    updatePhysics: () => {
      dispatch({
        type: 'UPDATE_PHYSICS'
      });
    },
    saveUserInfo: (name) => {
      const key = createWarrior({ name: name }).key;
      dispatch({
        type: 'GAME_JOINED',
        id: key,
      });
    },
    editUserInfo: (editField, value) => {
      dispatch(editUserInfo(editField, value));
    },
  };
});

export { generateHomeContainer };
