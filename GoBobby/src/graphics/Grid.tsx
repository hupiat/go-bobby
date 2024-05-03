import React from 'react';
import {Text} from 'react-native';
import usePlacementBuilder from '../engine/usePlacementBuilder';
import Wall from './Wall';

interface IProps {}

export default function Grid() {
  // Display a base grid

  const {horizontalSpaces, verticalSpaces} = usePlacementBuilder();

  const lineLeftRight = [];
  for (let i = 0; i <= verticalSpaces; i++) {
    lineLeftRight.push(<Wall type="Brick" x={0} y={i} key={i} />);
    lineLeftRight.push(
      <Wall type="Brick" x={horizontalSpaces - 1} y={i} key={i + 'right'} />,
    );
  }

  for (let i = 0; i < verticalSpaces; i++) {}

  return <>{lineLeftRight}</>;
}
