import React, {useMemo} from 'react';
import usePlacementBuilder from '../engine/usePlacementBuilder';
import {Image} from 'react-native';

interface IProps {
  x: number;
  y: number;
}

export default function Player({x, y}: IProps) {
  const {getPositionStyle} = usePlacementBuilder();

  const render = useMemo<JSX.Element>(() => {
    const pos = getPositionStyle(x, y).position;
    return (
      <Image
        source={require('../../assets/player.png')}
        alt={'Player'}
        style={{
          position: 'absolute',
          left: pos.left,
          top: pos.top,
        }}
      />
    );
  }, [x, y]);

  return render;
}
