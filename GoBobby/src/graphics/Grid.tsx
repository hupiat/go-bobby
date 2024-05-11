import React, {useDeferredValue, useState} from 'react';
import usePlacementBuilder from '../engine/usePlacementBuilder';
import Wall from './Wall';
import {
  GamePosition,
  IGridProtocol,
  WallProtocol,
} from '../engine/IGridProtocol';
import {View} from 'react-native';
import Player, {PlayerOrientation} from './Player';
import usePanResponder from '../devices/usePanResponder';

const HUD_SHIFT = 2;

interface IProps {
  protocol: IGridProtocol;
}

// Each element should be memoized by itself (responsability principle)

export default function Grid({protocol}: IProps) {
  const grid = new Map<GamePosition, JSX.Element>();

  const [playerOrientation, setPlayerOrientation] =
    useState<PlayerOrientation>('right');
  const [playerPosition, setPlayerPosition] = useState<GamePosition>(
    protocol.playerStart,
  );
  const playerPositionDeferred = useDeferredValue(playerPosition);

  // Moving player callback

  const panResponderRef = usePanResponder(orientation => {
    // This one is deferred internally
    setPlayerOrientation(orientation);
    let hasMoved = false;
    setPlayerPosition(playerPosition => {
      let newValue = playerPosition;
      movePlayerLoop: for (let i = playerPosition[0]; ; i++) {
        newValue = [newValue[0] + 1, newValue[1]];
        console.log(newValue);
        if ([...grid.keys()].some(pos => pos[0] === newValue[0])) {
          break movePlayerLoop;
        }
      }
      hasMoved = newValue !== playerPosition;
      return newValue;
    });
    console.log(hasMoved);
    return hasMoved;
  });
  const {horizontalSpaces, verticalSpaces} = usePlacementBuilder();

  const continueIfRemoved = (wall: WallProtocol): boolean =>
    protocol.removed.some(w => w === wall);

  // Building grid

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
      grid.set([f_x, y], <Wall type="brick" x={f_x} y={y} key={i + '-left'} />);
    }
    // Right line
    if (
      !continueIfRemoved({
        position: [s_x, y],
        type: 'brick',
      })
    ) {
      grid.set(
        [s_x, y],
        <Wall type="brick" x={s_x} y={y} key={i + '-right'} />,
      );
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
      grid.set([x, f_y], <Wall type="brick" x={x} y={f_y} key={j + '-top'} />);
    }
    // Bottom line
    if (
      !continueIfRemoved({
        position: [x, s_y],
        type: 'brick',
      })
    ) {
      grid.set(
        [x, s_y],
        <Wall type="brick" x={x} y={s_y} key={j + '-bottom'} />,
      );
    }
  }

  // Then applying protocols

  // Exit gate
  grid.set(
    [protocol.exit[0], protocol.exit[1]],
    <Wall type="exit" x={protocol.exit[0]} y={protocol.exit[1]} key={'exit'} />,
  );

  // Player
  grid.set(
    [playerPosition[0], playerPosition[1]],
    <Player
      x={playerPositionDeferred[0]}
      y={playerPositionDeferred[1]}
      orientation={playerOrientation}
      key="player"
    />,
  );

  // Post-processing walls
  protocol.walls
    .filter(w => !continueIfRemoved(w))
    .forEach((wall, i) =>
      grid.set(
        [wall.position[0], wall.position[1]],
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
      {...panResponderRef.panHandlers}>
      {[...grid.values()]}
    </View>
  );
}
