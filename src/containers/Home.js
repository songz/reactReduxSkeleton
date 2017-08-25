import { connect } from 'react-redux';

const generateHomeContainer = connect((state) => {
  return {
    name: state.appState.name
  }
}, (dispatch) => {
  return {
    changeName: () => {
      dispatch({});
    }
  };
});

export { generateHomeContainer };
