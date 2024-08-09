import React, {
  Dispatch,
  SetStateAction,
  useDeferredValue,
  useEffect,
  useState,
} from 'react';
import usePlacementBuilder, {
  compareGamePositions,
  HUD_SHIFT,
} from '../engine/usePlacementBuilder';
import Wall from './Wall';
import {
  GamePosition,
  IGridProtocol,
  WallProtocol,
} from '../engine/IGridProtocol';
import {SafeAreaView, Vibration} from 'react-native';
import Player, {PLAYER_MOVEMENT_DURATION_MS, PlayerOrientation} from './Player';
import usePanResponder from '../devices/usePanResponder';
import {WorkflowStep} from '../engine/WorkflowStep';

interface IProps {
  protocol: IGridProtocol;
  workflowStep: WorkflowStep;
  setWorkflowStep: Dispatch<SetStateAction<WorkflowStep>>;
}

// Each element should be memoized by itself (responsability principle)

export default function Grid({protocol, workflowStep, setWorkflowStep}: IProps) {
  const grid = new Map<GamePosition, JSX.Element>();

  const [playerOrientation, setPlayerOrientation] =
    useState<PlayerOrientation>('right');
  const [playerPosition, setPlayerPosition] = useState<GamePosition>(
    protocol.playerStart,
  );
  const [iceWallsHit, setIceWallsHit] = useState<GamePosition[]>([]);
  const playerPositionDeferred = useDeferredValue(playerPosition);

  useEffect(() => {
    setPlayerPosition(protocol.playerStart);
  }, [protocol]);

  // Moving player callback

  const panResponderRef = usePanResponder(playerOrientation => {
    // This one is deferred internally (player orientation)
    setPlayerOrientation(playerOrientation);
    // Not this one (player position is delegate to this class tho)
    setPlayerPosition(playerPosition => {
      let newValue = playerPosition;
      const walls = [...grid.entries()]
        .filter(
          e =>
            e[1].type.prototype === Wall.prototype &&
            e[1].props.type !== 'exit',
        )
        .map(e => e[0]);
      const iceWalls  = [...grid.entries()]
        .filter(
          e =>
            e[1].type.prototype === Wall.prototype &&
            e[1].props.type === 'ice',
        )
        .map(e => e[0]);
      const exitGate = [...grid.entries()]
        .filter(
          e =>
            e[1].type.prototype === Wall.prototype &&
            e[1].props.type === 'exit',
        )
        // should throw an error if not found so this is nice
        .map(e => e[0])[0];
      const isStucked = (
        callback: (first: GamePosition, other: GamePosition) => boolean,
      ) => {
        const w = walls.find(pos => compareGamePositions(pos, newValue, callback));
        if (!!w && iceWalls.some(ice => compareGamePositions(ice, w))) {
          setTimeout(() => setIceWallsHit(iceWallsHit => [...iceWallsHit, w]), PLAYER_MOVEMENT_DURATION_MS + 500);
        }
        return !!w || compareGamePositions(exitGate, newValue);
      };
      switch (playerOrientation) {
        case 'right':
          for (
            let i = playerPosition[0];
            !isStucked((f, o) => f[0] === o[0] + 1 && f[1] === o[1]);
            i++
          ) {
            newValue = [newValue[0] + 1, newValue[1]];
          }
          break;
        case 'left':
          for (
            let i = playerPosition[0];
            !isStucked((f, o) => f[0] === o[0] - 1 && f[1] === o[1]);
            i++
          ) {
            newValue = [newValue[0] - 1, newValue[1]];
          }
          break;
        case 'top':
          for (
            let j = playerPosition[1];
            !isStucked((f, o) => f[0] === o[0] && f[1] === o[1] - 1);
            j++
          ) {
            newValue = [newValue[0], newValue[1] - 1];
          }
          break;
        case 'bottom':
          for (
            let j = playerPosition[1];
            !isStucked((f, o) => f[0] === o[0] && f[1] === o[1] + 1);
            j++
          ) {
            newValue = [newValue[0], newValue[1] + 1];
          }
          break;
      }
      setTimeout(() => {
        if (compareGamePositions(exitGate, newValue)) {
          setWorkflowStep('won');
        } else {
          Vibration.vibrate();
        }
      }, PLAYER_MOVEMENT_DURATION_MS);

      return newValue;
    });
  });
  const {horizontalSpaces, verticalSpaces} = usePlacementBuilder();

  const continueIfRemoved = (wall: WallProtocol): boolean =>
    protocol.removed.some(w => w === wall);

  // Building grid

  // Displaying base grid (blocking gates)
  // Which can be partially complete

  for (let i = 0; i < verticalSpaces; i++) {
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
    const f_y = 0;
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
      workflowPlayerStep={workflowStep}
      key="player"
    />,
  );

  // Post-processing walls
  protocol.walls
    .filter(w => !continueIfRemoved(w))
    .filter(w => !compareGamePositions(w.position, protocol.exit))
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

    iceWallsHit.forEach(w => {
      for (const e of grid) {
        if (compareGamePositions(w, e[0])) {
          grid.delete(e[0]);
        }
      }
    });

  return (
    <SafeAreaView
      style={{
        height: 'auto',
        width: '100%',
        backgroundColor: 'grey',
        position: 'absolute',
        right: 0,
        bottom: 0,
        top: HUD_SHIFT,
        left: 0,
      }}
      {...panResponderRef.panHandlers}>
      {[...grid.values()]}
    </SafeAreaView>
  );
}
