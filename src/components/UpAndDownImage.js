import React, { Component } from 'react';
import { Animated } from 'react-native';

const image = require('../../assets/NY1.jpg');

export default class UpAndDownImage extends Component {
  state = {
    marginTop: new Animated.Value(0),
  }

  componentDidMount() {
    this.down();
  }

  down() {
    Animated.timing(
      this.state.marginTop,
      {
        toValue: 200,
        duration: 3000,
      },
    ).start(() => this.up());
  }

  up() {
    Animated.timing(
      this.state.marginTop,
      {
        toValue: 0,
        duration: 3000,
      },
    ).start(() => this.down());
  }

  render() {
    const { marginTop } = this.state;

    return (
      <Animated.Image
        source={image}
        style={{
          marginTop,
        }}
      >
      </Animated.Image>
    );
  }
}
