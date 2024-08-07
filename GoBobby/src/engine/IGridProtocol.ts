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

export const LEVELS: IGridProtocol[] = [{
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
}]