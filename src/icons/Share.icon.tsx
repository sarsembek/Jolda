import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ShareIcon = ({ width = 24, height = 24, color = "white" }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
      <Path
        d="M4.66675 14V23.3333C4.66675 23.9522 4.91258 24.5457 5.35017 24.9832C5.78775 25.4208 6.38124 25.6667 7.00008 25.6667H21.0001C21.6189 25.6667 22.2124 25.4208 22.65 24.9832C23.0876 24.5457 23.3334 23.9522 23.3334 23.3333V14M18.6667 7L14.0001 2.33333M14.0001 2.33333L9.33342 7M14.0001 2.33333V17.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ShareIcon;
