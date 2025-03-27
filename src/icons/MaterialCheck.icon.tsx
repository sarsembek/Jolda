import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MaterialCheckIcon = ({ size = 18, color = "#fff" }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 16.2l-4.2-4.2-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
        fill={color}
      />
    </Svg>
  );
};

export default MaterialCheckIcon;
