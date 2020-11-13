import React, { useCallback, useEffect, useMemo, useState } from "react";
import { StyleSheet, Dimensions, Image, View } from 'react-native';
import BrickImage from '../assets/brick_wall.png';
import PlayerImage from '../assets/player.png';

const EMPTY_CASE = 0;
const BRICK_CASE = 1;
const PLAYER_CASE = 2;
const CASE_NUMBER_WIDTH = 20;
const CASE_NUMBER_HEIGHT = 20;

interface IProps {
  start: [number, number];
  end: [number, number];
  player: [number, number];
  blocks?: [number, number][];
}

export default function Grid({
  start,
  end,
  player,
  blocks
}: IProps) {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const caseWidth = useMemo(() => Math.floor(width / CASE_NUMBER_WIDTH), [width]);
  const caseHeight = useMemo(() => Math.floor(height / CASE_NUMBER_HEIGHT), [height]);
  const [grid, setGrid] = useState<number[][]>(Array(CASE_NUMBER_WIDTH));

  const isStart = useCallback((i: number, j: number) => start[0] === i && start[1] === j, []);
  const isEnd = useCallback((i: number, j: number) => end[0] === i && end[1] === j, []);
  const hasBlock = useCallback((i: number, j: number) => {
    const hasBlock = blocks && blocks.some(b => b[0] !== i && b[1] !== j) ||
      i === 0 ||
      i === CASE_NUMBER_WIDTH - 1 ||
      j === 0 ||
      j === CASE_NUMBER_HEIGHT - 1;
    return !isStart(i, j) && !isEnd(i, j) && hasBlock;
  }, []);

  useEffect(() => {
    for (let i = 0; i < CASE_NUMBER_WIDTH; i++) {
      setGrid(grid => {
        grid[i] = Array(CASE_NUMBER_HEIGHT);
        for (let j = 0; j < CASE_NUMBER_HEIGHT; j++) {
          if (hasBlock(i, j)) {
            grid[i][j] = BRICK_CASE;
          } else if (isStart(i, j)) {
            grid[i][j] = PLAYER_CASE;
          } else {
            grid[i][j] = EMPTY_CASE;
          }
        }
        return grid;
      });
    }
    setGrid([...grid]);
  }, [start, end, player, blocks]);

  const renderColumn = (column: number[]) => {
    return column.map((stub, i) => {
      if (stub === BRICK_CASE) {
        return <Image source={BrickImage} key={i} style={{
          flex: column.length
        }} />;
      } else if (stub === PLAYER_CASE) {
        return <Image source={PlayerImage} key={i} style={{
          flex: column.length
        }} />;
      } else {
        return <View key={i} style={{
          flex: column.length
        }} />
      }
    })
  };

  console.log(grid);

  return (
    <>
      {
        grid.map((column, i) => <View style={{
          height: '100vh',
          flex: grid.length
        }} key={i}>{renderColumn(column)}</View>)
      }
    </>
  )
}