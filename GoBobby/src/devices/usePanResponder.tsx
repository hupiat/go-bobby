import {useRef} from 'react';
import {PanResponder} from 'react-native';
import {PlayerOrientation} from '../graphics/Player';

const MOVE_GESTURE_TOLERANCY = 50;

export type PanResponderSuscriber = (orientation: PlayerOrientation) => boolean;

export default function usePanResponder(suscriber: PanResponderSuscriber) {
  return useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove(e, gestureState) {
        if (gestureState.dx > MOVE_GESTURE_TOLERANCY) {
          suscriber('right');
        }
        if (gestureState.dx < -MOVE_GESTURE_TOLERANCY) {
          suscriber('left');
        }
        if (gestureState.dy > MOVE_GESTURE_TOLERANCY) {
          suscriber('bottom');
        }
        if (gestureState.dy < -MOVE_GESTURE_TOLERANCY) {
          suscriber('top');
        }
      },
    }),
  ).current;
}
