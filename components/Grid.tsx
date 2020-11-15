import React, { useEffect, useState } from "react";
import { Image, View } from 'react-native';
import BrickImage from '../assets/brick_wall.png';
import Player, { Orientation } from "./Player";
import { doubleEquality } from "./utils/math";

const EMPTY_CASE = 0;
const BRICK_CASE = 1;
const PLAYER_CASE = 2;
const CASE_NUMBER_WIDTH = 20;
const CASE_NUMBER_HEIGHT = 30;

export interface IGridProps {
  start: [number, number][];
  end: [number, number][];
  playerPosition: [number, number];
  playerOrientation?: Orientation;
  blocks?: [number, number][];
}

export default function Grid({
  start,
  end,
  playerPosition,
  playerOrientation,
  blocks
}: IGridProps) {
  const [grid, setGrid] = useState<number[][]>(Array(CASE_NUMBER_WIDTH));
  const isStart = (i: number, j: number) => start.some(s => doubleEquality(i, j, s));
  const isEnd = (i: number, j: number) => end.some(e => doubleEquality(i, j, e));
  const isPlayer = (i: number, j: number) => doubleEquality(i, j, playerPosition);
  const hasBlock = (i: number, j: number) => {
    const hasBlock = blocks && blocks.some(b => doubleEquality(i, j, b)) ||
      i === 0 ||
      i === CASE_NUMBER_WIDTH - 1 ||
      j === 0 ||
      j === CASE_NUMBER_HEIGHT - 1;
    return !isStart(i, j) && !isEnd(i, j) && hasBlock;
  };

  useEffect(() => {
    console.log(playerPosition);
    for (let i = 0; i < CASE_NUMBER_WIDTH; i++) {
      setGrid(grid => {
        grid[i] = Array(CASE_NUMBER_HEIGHT);
        for (let j = 0; j < CASE_NUMBER_HEIGHT; j++) {
          if (hasBlock(i, j)) {
            grid[i][j] = BRICK_CASE;
            if (!blocks?.some(b => doubleEquality(i, j, b))) {
              blocks?.push([i, j]);
            }
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
  }, [start, end, playerOrientation, playerPosition, blocks]);

  const renderColumn = (column: number[]) => {
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
  };

  return (
    <>
      {
        grid.map((column, i) => <View style={{
          flex: grid.length - 1
        }} key={i}>{renderColumn(column)}</View>)
      }
    </>
  );
}