import React, { useState } from "react";
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

  console.log(playerOrientation);

  return (
    <>
      <View style={styles.gestureContainer}>
        <View style={styles.gestureContainerHorizontal}>
          <TouchableOpacity onLongPress={() => setPlayerOrientation('left')}>
            <View style={styles.gesture}></View>
          </TouchableOpacity>
          <TouchableOpacity onLongPress={() => setPlayerOrientation('right')}>
            <View style={styles.gesture}></View>
          </TouchableOpacity>
        </View>
        <View style={styles.gestureContainerVertical}>
          <TouchableOpacity onLongPress={() => setPlayerOrientation('top')}>
            <View style={styles.gesture}></View>
          </TouchableOpacity>
          <TouchableOpacity onLongPress={() => setPlayerOrientation('bottom')}>
            <View style={styles.gesture}></View>
          </TouchableOpacity>
        </View>
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
  gestureContainerVertical: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
  },
  gestureContainerHorizontal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 11
  },
  gesture: {
    paddingTop: Dimensions.get("window").height / 4,
    paddingBottom: Dimensions.get("window").height / 4,
    paddingLeft: Dimensions.get("window").width / 4,
    paddingRight: Dimensions.get("window").width / 4,
    backgroundColor: "red",
    opacity: 0.1
  }
})