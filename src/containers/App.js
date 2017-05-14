import { connect } from 'react-redux';

const generateAppContainer= connect((state) => {
  return {
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
}});

export { generateAppContainer};
