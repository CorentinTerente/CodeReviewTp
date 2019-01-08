import React, { Component } from 'react';
import {
  ScrollView,
  Button,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Sentry, SentrySeverity } from 'react-native-sentry';
import Config from 'react-native-config';

import Info from '../components/Info';

import { GREETINGS_SCENE_NAME } from './GreetingsScreen';
import { JSX_SCENE_NAME } from './JsxScreen';
import { STATE_SCENE_NAME } from './StateScreen';
import { ANIMATION_SCENE_NAME } from './AnimationScreen';

export const HOME_SCENE_NAME = 'HOME_SCENE';

Sentry.config('https://5dd320d141e746c7b441c0c07023800a@sentry.io/1365598').install();

Sentry.setTagsContext({
  environment: 'production',
  react: true,
});

Sentry.setUserContext({
  email: 'corentin.terente@gmail.com',
  userID: '12341',
  username: 'corentin',
  extra: {
    isAdmin: false,
  },
});


const styles = StyleSheet.create({
  margin: {
    marginTop: 10,
  },
});

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    this.navigate = this.props.navigation.navigate;

    this.state = { error: null };

    this.navigateToGreetings = this.navigateToGreetings.bind(this);
    this.navigateToJsx = this.navigateToJsx.bind(this);
    this.navigateToState = this.navigateToState.bind(this);
    this.navigateToAnimation = this.navigateToAnimation.bind(this);
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  navigateToGreetings() {
    Sentry.captureMessage('NavigateToGreetings', {
      level: SentrySeverity.Info,
    });
    this.navigate(GREETINGS_SCENE_NAME);
  }

  navigateToJsx() {
    Sentry.captureMessage('NavigateToJSX', {
      level: SentrySeverity.Info,
    });
    this.navigate(JSX_SCENE_NAME);
  }

  navigateToState() {
    Sentry.captureMessage('NavigateToState', {
      level: SentrySeverity.Info,
    });
    this.navigate(STATE_SCENE_NAME);
  }

  navigateToAnimation() {
    Sentry.captureMessage('NavigateToAnimation', {
      level: SentrySeverity.Info,
    });
    this.navigate(ANIMATION_SCENE_NAME);
  }

  render() {
    return (
      <ScrollView>
        <Info />
        <View style={styles.margin}>
          <Button
            onPress={this.navigateToGreetings}
            title="Greetings"
          />
        </View>

        <View style={styles.margin}>
          <Button
            onPress={this.navigateToJsx}
            title="Jsx"
          />
        </View>
        <View style={styles.margin}>
          <Button
            onPress={this.navigateToState}
            title="State"
          />
        </View>
        <View style={styles.margin}>
          <Button
            onPress={this.navigateToAnimation}
            title="Animation"
          />
        </View>
        <View style={styles.margin}>
          <Button
            onPress={() => {
              Sentry.nativeCrash();
            }}
            title="Native Crash"
          />
        </View>
        <View>
          <Text>{Config.ENV}</Text>
        </View>
      </ScrollView>
    );
  }
}
