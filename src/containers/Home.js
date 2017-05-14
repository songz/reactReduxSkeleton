import { connect } from 'react-redux';

const generateHomeContainer = connect((state) => {
  return {
    position: state.avatar.position || 0,
  }
}, (dispatch) => {
  return {
    changeIndex: (id, index) => {
      dispatch({
        type: 'AVATAR_POSITION_CHANGE',
        id: id,
        position: index
      });
    }
  };
});

export { generateHomeContainer };
