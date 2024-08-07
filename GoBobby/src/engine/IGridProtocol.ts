import { useMemo } from 'react';
import {WallType} from '../graphics/Wall';

export type GamePosition = [number, number];
export type WallProtocol = {
  position: GamePosition;
  type: WallType;
};

export interface IGridProtocol {
  walls: WallProtocol[];
  removed: WallProtocol[];
  playerStart: GamePosition;
  exit: GamePosition;
}

export const useLevels: () => IGridProtocol[] = () => useMemo(() => [{
  // 1
  playerStart: [10, 10],
  removed: [],
  walls: [],
  exit: [15, 10],
},
{
  // 2
  playerStart: [10, 10],
  removed: [],
  walls: [{
    position: [11, 11],
    type: "brick"
  }, {
    position: [12, 12],
    type: "brick"
  }],
  exit: [17, 12],
},
{
  // 3
  playerStart: [5, 3],
  removed: [],
  walls: [{
    position: [6, 1],
    type: "brick"
  }, {
    position: [6, 2],
    type: "brick"
  }, {
    position: [6, 3],
    type: "brick"
  }, {
    position: [1, 7],
    type: "brick"
  }],
  exit: [19, 6],
},
{
  // 4
  playerStart: [7, 6],
  removed: [],
  walls: [{
    position: [6, 1],
    type: "brick"
  }, {
    position: [6, 2],
    type: "brick"
  }, {
    position: [6, 10],
    type: "brick"
  }, {
    position: [1, 7],
    type: "brick"
  }],
  exit: [19, 6],
}
], []);