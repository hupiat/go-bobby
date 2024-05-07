import React from 'react';
import usePlacementBuilder from '../engine/usePlacementBuilder';
import Wall from './Wall';
import {IGridProtocol, WallProtocol} from '../engine/IGridProtocol';
import {View} from 'react-native';
import Player from './Player';
import usePanResponder from '../devices/usePanResponder';

const HUD_SHIFT = 2;

interface IProps {
  protocol: IGridProtocol;
}

// Each element should be memoized by itself (responsability principle)

export default function Grid({protocol}: IProps) {
  const panResponder = usePanResponder(orientation => {
    console.log(orientation);
    return false;
  });
  const {horizontalSpaces, verticalSpaces} = usePlacementBuilder();

  const grid = [];

  const continueIfRemoved = (wall: WallProtocol): boolean =>
    protocol.removed.some(w => w === wall);

  // Displaying base grid (blocking gates)
  // Could be partially complete

  for (let i = HUD_SHIFT; i < verticalSpaces; i++) {
    const f_x = 0;
    const s_x = horizontalSpaces - 1;
    const y = i;

    // Left line
    if (
      !continueIfRemoved({
        position: [f_x, y],
        type: 'brick',
      })
    ) {
      grid.push(<Wall type="brick" x={f_x} y={y} key={i + '-left'} />);
    }
    // Right line
    if (
      !continueIfRemoved({
        position: [s_x, y],
        type: 'brick',
      })
    ) {
      grid.push(<Wall type="brick" x={s_x} y={y} key={i + '-right'} />);
    }
  }
  for (let j = 1; j < horizontalSpaces; j++) {
    const x = j;
    const f_y = HUD_SHIFT;
    const s_y = verticalSpaces - 1;

    // Top line
    if (
      !continueIfRemoved({
        position: [x, f_y],
        type: 'brick',
      })
    ) {
      grid.push(<Wall type="brick" x={x} y={f_y} key={j + '-top'} />);
    }
    // Bottom line
    if (
      !continueIfRemoved({
        position: [x, s_y],
        type: 'brick',
      })
    ) {
      grid.push(<Wall type="brick" x={x} y={s_y} key={j + '-bottom'} />);
    }
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
  protocol.walls
    .filter(w => !continueIfRemoved(w))
    .forEach((wall, i) =>
      grid.push(
        <Wall
          x={wall.position[0]}
          y={wall.position[1]}
          type={wall.type}
          key={i}
        />,
      ),
    );

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
      }}
      {...panResponder.panHandlers}>
      {grid}
    </View>
  );
}
