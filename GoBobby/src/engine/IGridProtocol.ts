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
