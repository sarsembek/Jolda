import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../core/interface/icon.interface';

const ChevronLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'black' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 18L9 12L15 6"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ChevronLeftIcon;
