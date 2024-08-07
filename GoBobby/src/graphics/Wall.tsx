import React, {useEffect, useMemo, useRef} from 'react';
import usePlacementBuilder from '../engine/usePlacementBuilder';
import { Path, Rect, Svg } from 'react-native-svg';
import useGameSizer from './useGameSizer';
import { Animated } from 'react-native';

export type WallType = 'brick' | 'ice' | 'exit';

interface IProps {
  x: number;
  y: number;
  type: WallType;
}

export default function Wall({type, x, y}: IProps) {
  const { gameElementPx } = useGameSizer();
  const {getPositionStyle} = usePlacementBuilder();
  const fadeAnim = useRef<Animated.Value>(new Animated.Value(1));

  useEffect(() => {
    return () => {
      Animated.timing(fadeAnim.current, {
        toValue: new Animated.Value(0),
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, []);

  const render = useMemo<JSX.Element>(() => {
    let path;
    const pos = getPositionStyle(x, y).position;
    switch (type) {
      case 'brick':
        path = <Rect width="24" height="24" fill="#755801"/>
        break;
      case 'ice':
        path = <Rect width="24" height="24" fill="#0277BD"/>
        break;
      case 'exit':
      path = 
        <>
          <Path d="M0 0H24V24H0V0Z" fill="#1565C0"/>
          <Path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FBC02D"/>
        </>
        break;
    }
    return (
      <Animated.View style={{
        opacity: fadeAnim.current
      }}>
        <Svg
          width={gameElementPx}
          height={gameElementPx}
          fill="none"
          style={{
            position: 'absolute',
            left: pos.left,
            top: pos.top,
          }}
        >
        {path}
      </Svg>
    </Animated.View>
    );
  }, [type, x, y]);

  return render;
}
