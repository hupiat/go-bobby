import React, {useEffect, useMemo, useRef} from 'react';
import usePlacementBuilder from '../engine/usePlacementBuilder';
import { Circle, Line, Path, Rect, Svg } from 'react-native-svg';
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
        path =
          <>
              <Rect x="1" y="1" width="22" height="22" fill="#b22222" stroke="#8b0000" stroke-width="2" />
  
              <Line x1="1" y1="8" x2="23" y2="8" stroke="#8b0000" stroke-width="2"/>
              <Line x1="1" y1="16" x2="23" y2="16" stroke="#8b0000" stroke-width="2"/>
              
              <Line x1="6" y1="1" x2="6" y2="8" stroke="#8b0000" stroke-width="2"/>
              <Line x1="18" y1="1" x2="18" y2="8" stroke="#8b0000" stroke-width="2"/>
              
              <Line x1="12" y1="8" x2="12" y2="16" stroke="#8b0000" stroke-width="2"/>
          </>
        break;
      case 'ice':
        path = 
          <>
            <Rect x="1" y="1" width="22" height="22" fill="#b3e0ff" stroke="#80bfff" stroke-width="2" />
            <Path d="M4 4 L20 4 L20 20 L4 20 Z" fill="#e6f7ff" opacity="0.7"/>
            <Path d="M4 4 L20 4 L12 12 Z" fill="#ffffff" opacity="0.5"/>
          </>
        break;
      case 'exit':
      path = 
        <>
          <Circle cx="12" cy="12" r="10" stroke="#1E90FF" stroke-width="2" fill="none" />
          
          <Circle cx="12" cy="12" r="6" stroke="#87CEFA" stroke-width="2" fill="none" />
          
          <Circle cx="12" cy="12" r="3" fill="#00BFFF" />
          
          <Line x1="12" y1="2" x2="12" y2="5" stroke="#00BFFF" stroke-width="1.5"/>
          <Line x1="12" y1="19" x2="12" y2="22" stroke="#00BFFF" stroke-width="1.5"/>
          <Line x1="2" y1="12" x2="5" y2="12" stroke="#00BFFF" stroke-width="1.5"/>
          <Line x1="19" y1="12" x2="22" y2="12" stroke="#00BFFF" stroke-width="1.5"/>
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
