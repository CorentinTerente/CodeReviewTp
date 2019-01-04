import React, { Component } from 'react';
import { Image, Animated } from 'react-native';

export default class UpAndDownImage extends Component {
  
  state = {
    fadeAnim: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start()
  }

  render() {

    let { fadeAnim } = this.state;

    return (
      <Animated.Image source={require('../../assets/NY1.jpg')}
        style={{
          ...this.props.style,
          opacity: fadeAnim, 
        }}
      >
      </Animated.Image>
    );
  }
}

