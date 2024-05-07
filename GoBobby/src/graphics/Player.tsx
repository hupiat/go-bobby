import React, {useMemo} from 'react';
import usePlacementBuilder from '../engine/usePlacementBuilder';
import {Image} from 'react-native';

export type PlayerOrientation = 'top' | 'bottom' | 'left' | 'right';

interface IProps {
  x: number;
  y: number;
  orientation: PlayerOrientation;
}

export default function Player({x, y, orientation}: IProps) {
  const {getPositionStyle} = usePlacementBuilder();

  const render = useMemo<JSX.Element>(() => {
    let path;
    const pos = getPositionStyle(x, y).position;
    switch (orientation) {
      case 'top':
        path = require('../../assets/player_top.png');
        break;
      case 'left':
        path = require('../../assets/player_left.png');
        break;
      case 'right':
        path = require('../../assets/player_right.png');
        break;
      case 'bottom':
        path = require('../../assets/player_bottom.png');
        break;
    }
    return (
      <Image
        source={path}
        alt={'player'}
        style={{
          position: 'absolute',
          left: pos.left,
          top: pos.top,
        }}
      />
    );
  }, [x, y, orientation]);

  return render;
}
