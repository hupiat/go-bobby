import React, { useCallback, useEffect, useState } from "react";
import { Image, View } from 'react-native';
import BrickImage from '../assets/brick_wall.png';
import Player, { Orientation } from "./Player";

const EMPTY_CASE = 0;
const BRICK_CASE = 1;
const PLAYER_CASE = 2;
const CASE_NUMBER_WIDTH = 20;
const CASE_NUMBER_HEIGHT = 20;

export interface IGridProps {
  start: [number, number][];
  end: [number, number][];
  player: [number, number];
  playerOrientation?: Orientation;
  blocks?: [number, number][];
}

export default function Grid({
  start,
  end,
  player,
  playerOrientation,
  blocks
}: IGridProps) {
  const [grid, setGrid] = useState<number[][]>(Array(CASE_NUMBER_WIDTH));
  const isStart = useCallback((i: number, j: number) => start.some(s => s[0] === i && s[1] === j), []);
  const isEnd = useCallback((i: number, j: number) => end.some(e => e[0] === i && e[1] === j), []);
  const isPlayer = useCallback((i: number, j: number) => player[0] === i && player[1] === j, []);
  const hasBlock = useCallback((i: number, j: number) => {
    const hasBlock = blocks && blocks.some(b => b[0] === i && b[1] === j) ||
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
          } else if (isPlayer(i, j)) {
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

  const renderColumn = useCallback((column: number[]) => {
    return column.map((stub, i) => {
      if (stub === BRICK_CASE) {
        return <Image source={BrickImage} key={i} style={{
          flex: column.length
        }} />;
      } else if (stub === PLAYER_CASE) {
        return <Player key={i} orientation={playerOrientation} style={{
          flex: column.length,
        }} />;
      } else {
        return <View key={i} style={{
          flex: column.length
        }} />
      }
    })
  }, [playerOrientation]);

  return (
    <>
      {
        grid.map((column, i) => <View style={{
          flex: grid.length
        }} key={i}>{renderColumn(column)}</View>)
      }
    </>
  )
}