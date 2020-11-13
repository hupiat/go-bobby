import React from "react";
import { Image, ImageStyle, StyleProp } from 'react-native';
import PlayerImage from '../assets/player.png';

interface IProps {
  key?: any
  style?: StyleProp<ImageStyle>;
  orientation?: 'top' | 'bottom' | 'left' | 'right'
}

export default function Player({
  key,
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
    <Image source={PlayerImage} key={key} style={styleWithOrientation} />
  );
}