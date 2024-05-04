import React from 'react';
import usePlacementBuilder from '../engine/usePlacementBuilder';
import Wall from './Wall';
import {IGridProtocol} from '../engine/IGridProtocol';
import {View} from 'react-native';

interface IProps {
  protocol: IGridProtocol;
}

export default function Grid({protocol}: IProps) {
  const {horizontalSpaces, verticalSpaces} = usePlacementBuilder();

  // Displaying base grid

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

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'grey',
        position: 'absolute',
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      }}>
      {grid}
    </View>
  );
}
