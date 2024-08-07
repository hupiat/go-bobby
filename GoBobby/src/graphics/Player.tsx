import React, {useEffect, useMemo, useRef} from 'react';
import usePlacementBuilder from '../engine/usePlacementBuilder';
import {Animated} from 'react-native';

export type PlayerOrientation = 'top' | 'bottom' | 'left' | 'right';

export const PLAYER_MOVEMENT_DURATION_MS = 500;

interface IProps {
  x: number;
  y: number;
  orientation: PlayerOrientation;
}

export default function Player({x, y, orientation}: IProps) {
  const {getPositionStyle} = usePlacementBuilder();
  const pos = getPositionStyle(x, y).position;
  const movementAnim = useRef<Animated.ValueXY>(
    new Animated.ValueXY({
      x: pos.left,
      y: pos.top,
    }),
  );

  useEffect(() => {
    Animated.timing(movementAnim.current, {
      toValue: new Animated.ValueXY({
        x: pos.left,
        y: pos.top,
      }),
      duration: PLAYER_MOVEMENT_DURATION_MS,
      useNativeDriver: false,
    }).start();
  }, [x, y]);

  const render = useMemo<JSX.Element>(() => {
    let path;
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
      <Animated.Image
        source={path}
        alt={'player'}
        style={{
          position: 'absolute',
          left: movementAnim.current.x,
          top: movementAnim.current.y,
        }}
      />
    );
  }, [x, y, orientation]);

  return render;
}
