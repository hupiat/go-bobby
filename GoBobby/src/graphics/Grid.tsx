import React from 'react';
import {Text} from 'react-native';
import usePlacementBuilder from '../engine/usePlacementBuilder';
import Wall from './Wall';

interface IProps {}

export default function Grid() {
  // Display a base grid

  const {horizontalSpaces, verticalSpaces} = usePlacementBuilder();

  const lineLeft = [];
  for (let i = 0; i < verticalSpaces; i++) {
    lineLeft.push(<Wall type="Brick" x={0} y={i} key={i} />);
  }

  const lineRight = [];
  for (let i = 0; i < verticalSpaces; i++) {
    lineRight.push(<Wall type="Brick" x={14} y={i} key={i} />);
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
