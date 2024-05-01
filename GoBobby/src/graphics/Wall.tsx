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
    return (
      <Image
        source={require('../../assets/walls/brick_wall.png')}
        alt={type}
        style={getPositionStyle(x, y).position}
      />
    );
  }, [type, x, y]);

  return render;
}
