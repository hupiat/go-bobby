import {useRef} from 'react';
import {PanResponder} from 'react-native';

export default function usePanResponder() {
  return useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove(e, gestureState) {
        console.log(gestureState);
      },
    }),
  ).current;
}
