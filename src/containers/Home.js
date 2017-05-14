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
  };
});

export { generateHomeContainer };
