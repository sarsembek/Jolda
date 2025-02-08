import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../core/interface/icon.interface';

const MenuIcon: React.FC<IconProps> = ({
  size = 28,
  color = 'black',
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        d="M4.66675 14H23.3334M4.66675 7H23.3334M4.66675 21H23.3334"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default MenuIcon;
