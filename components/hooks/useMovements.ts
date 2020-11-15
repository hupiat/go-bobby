import { useState } from "react";
import { Orientation } from "../Player";
import { objectsDoubleEquality } from "../utils/math";

export default function useMovements(
  start: [number, number][],
  end: [number, number][],
  blocks: [number, number][]) {
  const [playerOrientation, setPlayerOrientationState] = useState<Orientation>('top');
  const [playerPosition, setPlayerPosition] = useState<[number, number]>(start[1] || start[0]);
  const isPlayerAtStart = start.some(s => objectsDoubleEquality(s, playerPosition));
  const isPlayerAtEnd = end.some(e => objectsDoubleEquality(e, playerPosition));

  const setPlayerOrientation = (orientation: Orientation) => {
    const isHittingBlock = () => {
      switch (orientation) {
        case 'top':
          return blocks.some(b => b[0] === playerPosition[0] && b[1] == playerPosition[1] - 1);
        case 'bottom':
          return blocks.some(b => b[0] === playerPosition[0] && b[1] === playerPosition[1] + 1);
        case 'left':
          return blocks.some(b => b[0] === playerPosition[0] - 1 && b[1] === playerPosition[1]);
        case 'right':
          return blocks.some(b => b[0] === playerPosition[0] + 1 && b[1] === playerPosition[1]);
      }
    }
    console.log(playerPosition);
    console.log(blocks);
    setPlayerOrientationState(orientation);
    setPlayerPosition(position => {
      while (!isHittingBlock()) {
        switch (orientation) {
          case 'top':
            position[1]--;
            break;
          case 'bottom':
            position[1]++;
            break;
          case 'left':
            position[0]--;
            break;
          case 'right':
            position[0]++;
            break;
        }
      }
      return [...position];
    });
  };

  return {
    playerOrientation,
    setPlayerOrientation,
    playerPosition,
    isPlayerAtStart,
    isPlayerAtEnd
  }
}