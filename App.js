
import React, { Component } from 'react';
import { LogBox } from 'react-native';

import { Provider } from 'react-redux'
import { store } from './src/Redux';
import Router from './src/router';

LogBox.ignoreLogs(['Setting a timer for a long period of time'])
LogBox.ignoreLogs(['Cannot update a component'])
LogBox.ignoreLogs(['Encountered two children with the same key'])
LogBox.ignoreLogs(['Each child in a list should have a unique'])
LogBox.ignoreLogs(['perform a React State update on an unmounted component'])


const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App;