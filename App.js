
import React, { Component } from 'react';
import { LogBox } from 'react-native';

import { Provider } from 'react-redux'
import { store } from './src/Redux';
import Router from './src/router';

LogBox.ignoreLogs(['Setting a timer for a long period of time'])


const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App;