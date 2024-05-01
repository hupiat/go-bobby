import React from 'react';
import useGameSizer from './useGameSizer';
import {Text} from 'react-native';

interface IProps {}

export default function Grid() {
  // Display a base grid
  const {deviceHeightPx, deviceWidthPx, gameElementPx} = useGameSizer();

  // Landscape mode
  const horizontal = Math.round(deviceHeightPx / gameElementPx);
  const vertical = Math.round(deviceWidthPx / gameElementPx);

  return (
    <>
      <Text>width : {deviceWidthPx}</Text>
      <Text>height : {deviceHeightPx}</Text>
      <Text>horizontal space : {horizontal}</Text>
      <Text>vertical space : {vertical}</Text>
    </>
  );

  //   return {
  //     {}
  //   }
}
