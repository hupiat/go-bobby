import React from 'react';
import {Text} from 'react-native';
import usePlacementBuilder from '../engine/usePlacementBuilder';
import Wall from './Wall';

interface IProps {}

export default function Grid() {
  // Display a base grid

  const {horizontalSpaces, verticalSpaces} = usePlacementBuilder();

  const lineLeft = [];
  for (let i = 0; i < horizontalSpaces; i++) {
    lineLeft.push(<Wall type="Brick" x={i} y={0} key={i} />);
  }

  const lineRight = [];
  for (let i = 0; i < horizontalSpaces; i++) {
    lineRight.push(<Wall type="Brick" x={i} y={14} key={i} />);
  }

  return (
    <>
      {lineLeft}
      {lineRight}
    </>
  );

  //   return {
  //     {}
  //   }
}
