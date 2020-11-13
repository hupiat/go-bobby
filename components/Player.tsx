import React from "react";
import { Image, ImageStyle, StyleProp } from 'react-native';
import PlayerImage from '../assets/player.png';

export type Orientation = 'top' | 'bottom' | 'left' | 'right';

interface IProps {
  style?: StyleProp<ImageStyle>;
  orientation?: Orientation;
}

export default function Player({
  style,
  orientation = 'top'
}: IProps) {
  let styleWithOrientation = style as object;
  if (orientation !== 'top') {
    switch (orientation) {
      case 'left':
        styleWithOrientation = {
          ...styleWithOrientation,
          transform: 'rotate(-90deg)'
        };
        break;
      case 'right':
        styleWithOrientation = {
          ...styleWithOrientation,
          transform: 'rotate(90deg)'
        };
        break;
      case 'bottom':
        styleWithOrientation = {
          ...styleWithOrientation,
          transform: 'rotate(180deg)'
        };
        break;
    }
  }
  return (
    <Image source={PlayerImage} style={styleWithOrientation} />
  );
}