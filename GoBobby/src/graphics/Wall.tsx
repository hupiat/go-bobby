import React, {useMemo} from 'react';
import usePlacementBuilder from '../engine/usePlacementBuilder';
import {Image} from 'react-native';

export type WallType = 'brick' | 'exit';

interface IProps {
  x: number;
  y: number;
  type: WallType;
}

export default function Wall({type, x, y}: IProps) {
  const {getPositionStyle} = usePlacementBuilder();

  const render = useMemo<JSX.Element>(() => {
    let path;
    const pos = getPositionStyle(x, y).position;
    switch (type) {
      case 'brick':
        path = require('../../assets/walls/brick_wall.png');
        break;
      case 'exit':
        path = require('../../assets/walls/exit_wall.png');
        break;
    }
    return (
      <Image
        source={path}
        alt={type}
        style={{
          position: 'absolute',
          left: pos.left,
          top: pos.top,
        }}
      />
    );
  }, [type, x, y]);

  return render;
}
