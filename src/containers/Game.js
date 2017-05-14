import { connect } from 'react-redux';

const generateGameContainer= connect((state) => {
  console.log('war', state.game.warriors[0]);
  return {
    positionX: state.game.warriors[0].position.x,
    positionY: state.game.warriors[0].position.y,
    test: state.game.warriors[0],
    id: state.id
  }
}, (dispatch) => {
  return {
    onKeyDown: (id, event) => {
      console.log('event', event.key);
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
