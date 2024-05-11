import {useCallback, useMemo} from 'react';
import useGameSizer from '../graphics/useGameSizer';
import {StyleSheet} from 'react-native';
import useScreenOrientation from '../devices/useScreenOrientation';
import {GamePosition} from './IGridProtocol';

interface IPlacementBuilder {
  horizontalSpaces: number;
  verticalSpaces: number;
  getPositionStyle: (
    x: number,
    y: number,
  ) => {position: {top: number; left: number}};
}

export default function usePlacementBuilder(): IPlacementBuilder {
  const {deviceHeightPx, deviceWidthPx, gameElementPx} = useGameSizer();
  const orientation = useScreenOrientation();

  // Landscape mode
  const horizontalSpaces = useMemo<number>(
    () => Math.round(deviceWidthPx / gameElementPx),
    [deviceWidthPx, gameElementPx],
  );
  const verticalSpaces = useMemo<number>(
    () => Math.round(deviceHeightPx / gameElementPx),
    [deviceHeightPx, gameElementPx],
  );

  const getPositionStyle = useCallback(
    (x: number, y: number) => {
      if (!Number.isInteger(x) || !Number.isInteger(y)) {
        throw Error('x and y must be valid integers for a virtual grid');
      }
      if (x < 0 || y < 0 || x > horizontalSpaces || y > verticalSpaces) {
        throw Error(
          'virtual grid dimensions are : horizontal(' +
            horizontalSpaces +
            ') and vertical(' +
            verticalSpaces +
            ') in landscape mode, but are : horizontal(' +
            x +
            ') and vertical(' +
            y +
            ')',
        );
      }

      const left = x * gameElementPx;
      const top = y * gameElementPx;

      return StyleSheet.create({
        position: {
          top,
          left,
        },
      });
    },
    [horizontalSpaces, verticalSpaces, orientation],
  );

  return {
    horizontalSpaces,
    verticalSpaces,
    getPositionStyle,
  };
}

export const compareGamePositions = (
  first: GamePosition,
  other: GamePosition,
  callback?: (first: GamePosition, other: GamePosition) => boolean,
) =>
  (first[0] === other[0] && first[1] === other[1]) ||
  (callback && callback(first, other));
