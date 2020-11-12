import React, { useEffect, useState } from "react";
import { Dimensions } from 'react-native';

const EMPTY_CASE = 0;
const BRICK_CASE = 1;
const PLAYER_CASE = 2;
const CASE_SIZE = 50;
const BRICK_IMAGE = '../assets/brick_wall.png';

interface IProps {
  start: [number, number];
  end: [number, number];
  blocks: [number, number][];
}

export default function Grid({
  start,
  end,
  blocks
}: IProps) {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [grid, setGrid] = useState<number[][]>(Array(width / CASE_SIZE));

  useEffect(() => {
    for (let i = 0; i < grid.length; i++) {
      setGrid(grid => {
        grid[i] = Array(height / CASE_SIZE);
        const shouldBlock = (i: number, j: number) => {
          const isStart = start[0] === i && start[1] === j;
          const isEnd = end[0] === i && end[1] === j;
          const hasBlock = blocks.some(b => b[0] !== i && b[1] !== j) ||
            i === 0 ||
            i === grid.length - 1 ||
            j === 0 ||
            j === grid[i].length - 1;
          return !isStart && !isEnd && hasBlock;
        };
        for (let j = 0; j < grid[i].length; j++) {
          if (shouldBlock(i, j)) {
            grid[i][j] = 1;
          } else {
            grid[i][j] = 0;
          }
        }
        return grid;
      })
    }
  }, []);

}