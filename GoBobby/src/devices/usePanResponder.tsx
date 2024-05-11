import {
  useDeferredValue,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {PanResponder} from 'react-native';
import {PlayerOrientation} from '../graphics/Player';

const MOVE_GESTURE_TOLERANCY = 50;

export type PanResponderSuscriber = (orientation: PlayerOrientation) => void;

export default function usePanResponder(suscriber: PanResponderSuscriber) {
  const [orientation, setOrientation] = useState<PlayerOrientation | null>(
    null,
  );
  const orientationDeferred = useDeferredValue(orientation);

  useLayoutEffect(() => {
    if (orientationDeferred) {
      suscriber(orientationDeferred);
    }
    return () => setOrientation(null);
  }, [orientationDeferred]);

  return useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove(e, gestureState) {
        if (gestureState.dx > MOVE_GESTURE_TOLERANCY) {
          setOrientation('right');
        }
        if (gestureState.dx < -MOVE_GESTURE_TOLERANCY) {
          setOrientation('left');
        }
        if (gestureState.dy > MOVE_GESTURE_TOLERANCY) {
          setOrientation('bottom');
        }
        if (gestureState.dy < -MOVE_GESTURE_TOLERANCY) {
          setOrientation('top');
        }
      },
    }),
  ).current;
}
