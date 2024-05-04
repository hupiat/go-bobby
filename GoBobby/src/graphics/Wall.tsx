import React, {useMemo} from 'react';
import usePlacementBuilder from '../engine/usePlacementBuilder';
import {Image} from 'react-native';

export type WallType = 'Brick';

interface IProps {
  x: number;
  y: number;
  type: WallType;
}

export default function Wall({type, x, y}: IProps) {
  const {getPositionStyle} = usePlacementBuilder();

  const render = useMemo<JSX.Element>(() => {
    const pos = getPositionStyle(x, y).position;
    return (
      <Image
        source={require('../../assets/walls/brick_wall.png')}
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
