import { connect } from 'react-redux';

const generateGameContainer= connect((state) => {
  return {
    warriors: state.game.warriors
  }
}, (dispatch) => {
  return {
    onKeyDown: (id, event) => {
      dispatch({
        type: 'AVATAR_MOVE',
        direction: event.key,
        id
      })
    },
    shoot: (id, bullets) => {
      dispatch({
        type: 'AVATAR_SHOOT',
        id,
        bullets
      });
    },
    hurt: (id) => {
      dispatch({
        type: 'AVATAR_HURT',
        id
      });
    }
  };
});

export { generateGameContainer};
