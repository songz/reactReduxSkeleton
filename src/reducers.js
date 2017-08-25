import { combineReducers } from 'redux';

const appState = (state = {
  name: 'yoojin'
}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const appReducers = combineReducers({
  appState,
});

export default appReducers;

