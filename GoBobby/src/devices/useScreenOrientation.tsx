import {useEffect, useState} from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

// Landscape mode support

export type LANDSCAPE_MODE =
  | ScreenOrientation.Orientation.LANDSCAPE_LEFT
  | ScreenOrientation.Orientation.LANDSCAPE_RIGHT;

export default function useScreenOrientation(): LANDSCAPE_MODE {
  const [orientation, setOrientation] = useState<LANDSCAPE_MODE>(
    ScreenOrientation.Orientation.LANDSCAPE_RIGHT,
  );

  const checkOrientation = async () => {
    let orientation = ScreenOrientation.Orientation.LANDSCAPE_RIGHT;
    try {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE,
      );
      orientation = await ScreenOrientation.getOrientationAsync();
    } catch (e) {
      console.error(e);
    }
    if (
      !(
        orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT ||
        orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT
      )
    ) {
      // Locking landscape mode from here
      // Don't forget platform support even with the lock via expo API
      if (orientation === 2) {
        orientation = ScreenOrientation.Orientation.LANDSCAPE_RIGHT;
      } else {
        orientation = ScreenOrientation.Orientation.LANDSCAPE_LEFT;
      }
    }
    setOrientation(orientation);
  };

  const handleOrientationChange = (o: ScreenOrientation.Orientation) => {
    if (
      orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
      orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT
    ) {
      setOrientation(o as LANDSCAPE_MODE);
    }
  };

  useEffect(() => {
    checkOrientation();
    ScreenOrientation.addOrientationChangeListener(listener =>
      handleOrientationChange(listener.orientationInfo.orientation),
    );
    return () => {
      ScreenOrientation.removeOrientationChangeListeners();
    };
  }, []);

  return orientation;
}
