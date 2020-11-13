import React, { useState } from "react";
import Grid, { IGridProps } from "./Grid";
import { Orientation } from "./Player";

export default function Level({
  start,
  end,
  blocks
}: IGridProps) {
  const [playerOrientation, setPlayerOrientation] = useState<Orientation>('top');
  const [playerPosition, setPlayerPosition] = useState<[number, number]>(start[1] || start[0]);

  return (
    <Grid start={start} end={end} player={playerPosition} playerOrientation={playerOrientation} blocks={blocks} />
  )
}