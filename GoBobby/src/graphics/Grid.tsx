import React from 'react';
import {Text} from 'react-native';
import usePlacementBuilder from '../engine/usePlacementBuilder';
import Wall from './Wall';
import {IGridProtocol} from '../engine/IGridProtocol';

interface IProps {
  protocol: IGridProtocol;
}

export default function Grid({protocol}: IProps) {
  const {horizontalSpaces, verticalSpaces} = usePlacementBuilder();

  // Displaying base grid

  // TODO : wait for landscape mode init (crashing)

  const grid = [];
  for (let i = 0; i < verticalSpaces; i++) {
    grid.push(<Wall type="Brick" x={0} y={i} key={i + '-left'} />);
    grid.push(
      <Wall type="Brick" x={horizontalSpaces - 1} y={i} key={i + '-right'} />,
    );
  }
  for (let j = 1; j < horizontalSpaces; j++) {
    grid.push(<Wall type="Brick" x={j} y={0} key={j + '-top'} />);
    grid.push(
      <Wall type="Brick" x={j} y={verticalSpaces - 1} key={j + '-bottom'} />,
    );
  }

  // Then applying protocols
  // TODO

  return <>{grid}</>;
}
