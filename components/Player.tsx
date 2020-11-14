import React, { useEffect, useState } from "react";
import { Image, ImageStyle, StyleProp } from 'react-native';
import PlayerTopImage from '../assets/player_top.png';
import PlayerLeftImage from '../assets/player_left.png';
import PlayerBottomImage from '../assets/player_bottom.png';
import PlayerRightImage from '../assets/player_right.png';

export type Orientation = 'top' | 'bottom' | 'left' | 'right';

interface IProps {
  style?: StyleProp<ImageStyle>;
  orientation?: Orientation;
}

export default function Player({
  style,
  orientation = 'top'
}: IProps) {
  const [source, setSource] = useState<any>(PlayerTopImage);
  useEffect(() => {
    switch (orientation) {
      case 'top':
        setSource(PlayerTopImage);
        break;
      case 'left':
        setSource(PlayerLeftImage);
        break;
      case 'bottom':
        setSource(PlayerBottomImage);
        break;
      case 'right':
        setSource(PlayerRightImage);
        break;
    }
  }, [orientation]);

  return (
    <Image source={source} style={style} />
  );
}