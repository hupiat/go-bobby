import {WallType} from '../graphics/Wall';

export interface IGridProtocol {
  walls: {
    position: [number, number];
    type: WallType;
  }[];
  removed: [number, number][];
  playerStart: [number, number];
}
