
import React, { Component } from 'react';
import { LogBox } from 'react-native';

import Router from './src/router';

LogBox.ignoreLogs(['Setting a timer for a long period of time'])


class App extends Component {
  render() {
    return (
      <Router />
    );
  }
}

export default App;