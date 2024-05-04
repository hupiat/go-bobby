import React from 'react';
import usePlacementBuilder from '../engine/usePlacementBuilder';
import Wall from './Wall';
import {IGridProtocol} from '../engine/IGridProtocol';
import {View} from 'react-native';
import Player from './Player';

const HUD_SHIFT = 2;

interface IProps {
  protocol: IGridProtocol;
}

export default function Grid({protocol}: IProps) {
  const {horizontalSpaces, verticalSpaces} = usePlacementBuilder();

  const grid = [];

  // Displaying base grid

  for (let i = HUD_SHIFT; i < verticalSpaces; i++) {
    grid.push(<Wall type="brick" x={0} y={i} key={i + '-left'} />);
    grid.push(
      <Wall type="brick" x={horizontalSpaces - 1} y={i} key={i + '-right'} />,
    );
  }
  for (let j = 1; j < horizontalSpaces; j++) {
    grid.push(<Wall type="brick" x={j} y={HUD_SHIFT} key={j + '-top'} />);
    grid.push(
      <Wall type="brick" x={j} y={verticalSpaces - 1} key={j + '-bottom'} />,
    );
  }

  // Then applying protocols

  // Exit gate
  grid.push(
    <Wall type="exit" x={protocol.exit[0]} y={protocol.exit[1]} key={'exit'} />,
  );

  // Player start position
  grid.push(
    <Player
      x={protocol.playerStart[0]}
      y={protocol.playerStart[1]}
      orientation={'right'}
      key="player"
    />,
  );

  // Post-processing walls
  protocol.walls.forEach((wall, i) =>
    grid.push(
      <Wall
        x={wall.position[0]}
        y={wall.position[1]}
        type={wall.type}
        key={i}
      />,
    ),
  );

  // TODO : removed ones

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
