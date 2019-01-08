import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import NavigationContainer from './src/NavigationContainer';

import { Sentry } from 'react-native-sentry';

Sentry.config('https://5dd320d141e746c7b441c0c07023800a@sentry.io/1365598').install();


export default class ReactNativeSample extends Component {
  render() {
    return (
      <NavigationContainer />
    );
  }
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
