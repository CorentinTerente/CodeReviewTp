import React, { Component } from 'react';
import UpAndDownImage from '../components/UpAndDownImage';

export const ANIMATION_SCENE_NAME = 'ANIMATION_SCENE';

export default class AnimationScreen extends Component {
  static animationOptions = {
    title: 'Animation',
  };

  render() {
    return (
      <UpAndDownImage />
    );
  }
}
