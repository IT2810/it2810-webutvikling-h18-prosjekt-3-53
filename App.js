import React from 'react';
import MainNavigator from 'navigation/MainNavigator';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from 'reducers';

// simple redux logger middleware
const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
}

const store = createStore(rootReducer, applyMiddleware(logger));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}