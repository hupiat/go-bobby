import React, { useMemo, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Button, Dimensions } from "react-native";
import Grid, { IGridProps } from "./Grid";
import { Orientation } from "./Player";

export default function Level({
  start,
  end,
  blocks
}: IGridProps) {
  const [playerOrientation, setPlayerOrientation] = useState<Orientation>('top');
  const [playerPosition, setPlayerPosition] = useState<[number, number]>(start[1] || start[0]);
  const isPlayerAtStart = useMemo(() => start.some(s =>
    s[0] === playerPosition[0] && s[1] === playerPosition[1]), [start, playerPosition]);

  console.log(playerOrientation);

  return (
    <>
      <View style={styles.gestureContainer}>
        <TouchableOpacity onLongPress={() => setPlayerOrientation('top')}>
          <View style={[styles.gesture, styles.gestureVerticale]}></View>
        </TouchableOpacity>
        <View style={styles.gestureSubContainerHorizontal}>
          <TouchableOpacity onLongPress={() => !isPlayerAtStart && setPlayerOrientation('left')}>
            <View style={[styles.gesture, styles.gestureHorizontale]}></View>
          </TouchableOpacity>
          <TouchableOpacity onLongPress={() => !isPlayerAtStart && setPlayerOrientation('right')}>
            <View style={[styles.gesture, styles.gestureHorizontale]}></View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onLongPress={() => setPlayerOrientation('bottom')}>
          <View style={[styles.gesture, styles.gestureVerticale]}></View>
        </TouchableOpacity>
      </View>
      <Grid start={start} end={end} player={playerPosition} playerOrientation={playerOrientation} blocks={blocks} />
    </>
  )
}

const styles = StyleSheet.create({
  gestureContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10
  },
  gestureSubContainerHorizontal: {
    display: 'flex',
    flexDirection: 'row'
  },
  gesture: {
    backgroundColor: '#4b6584',
    opacity: 0.1
  },
  gestureVerticale: {
    paddingTop: Dimensions.get("window").height / 8,
    paddingBottom: Dimensions.get("window").height / 8,
    paddingLeft: Dimensions.get("window").width / 2,
    paddingRight: Dimensions.get("window").width / 2,
  },
  gestureHorizontale: {
    paddingTop: Dimensions.get("window").height / 4,
    paddingBottom: Dimensions.get("window").height / 4,
    paddingLeft: Dimensions.get("window").width / 4,
    paddingRight: Dimensions.get("window").width / 4,
  }
})