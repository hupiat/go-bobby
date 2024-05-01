import React, {useMemo} from 'react';
import * as WallBrick from '../../assets/walls/brick_wall.png';

export type WallType = 'Brick';

interface IProps {
  type: WallType;
}

export default function Wall({type}: IProps) {
  const render = useMemo<JSX.Element>(() => {
    let img: any;
    switch (type) {
      case 'Brick':
        img = WallBrick;
    }
    return <img src={img} alt={type} />;
  }, [type]);

  return render;
}
