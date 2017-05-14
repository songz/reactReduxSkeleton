import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App';
import appReducers from './reducers';
import { generateAppContainer } from './containers/App';
import './style/index.css';

const AppContainer = generateAppContainer(App);
let store = createStore(appReducers)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
