import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
}

const ChevronLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'black' }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>

    
  );
};

export default ChevronLeftIcon;
