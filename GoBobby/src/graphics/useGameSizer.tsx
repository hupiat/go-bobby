import {useMemo} from 'react';
import {useWindowDimensions} from 'react-native';

interface IGameSizer {
  deviceWidthPx: number;
  deviceHeightPx: number;
  gameElementPx: number;
}

export default function useGameSizer(): IGameSizer {
  const deviceWidthPx = useWindowDimensions().width;
  const deviceHeightPx = useWindowDimensions().height;
  const gameElementPx = 24;

  return useMemo<IGameSizer>(
    () => ({
      deviceWidthPx,
      deviceHeightPx,
      gameElementPx,
    }),
    [deviceWidthPx, deviceHeightPx],
  );
}
