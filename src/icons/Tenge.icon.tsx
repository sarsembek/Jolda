import React from 'react';
import Svg, { Path } from 'react-native-svg';

const TengeIcon = ({ width = 20, height = 20, color = "#000" }) => {
  return (
    <Svg width={width} height={height} viewBox="0 -9 28 28" fill="none">
      <Path d="M12 19V9M6 9H18M6 5H18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default TengeIcon;
