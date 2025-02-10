import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../core/interface/icon.interface';

const MapPinIcon: React.FC<IconProps> = ({ size = 24, color = 'black' }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
    >
      <Path
        d="M17.1666 8.33333C17.1666 13.3333 10.4999 18.3333 10.4999 18.3333C10.4999 18.3333 3.83325 13.3333 3.83325 8.33333C3.83325 6.56522 4.53563 4.86953 5.78587 3.61929C7.03612 2.36905 8.73181 1.66667 10.4999 1.66667C12.268 1.66667 13.9637 2.36905 15.214 3.61929C16.4642 4.86953 17.1666 6.56522 17.1666 8.33333Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.4999 10.8333C11.8806 10.8333 12.9999 9.71405 12.9999 8.33333C12.9999 6.95262 11.8806 5.83333 10.4999 5.83333C9.11921 5.83333 7.99992 6.95262 7.99992 8.33333C7.99992 9.71405 9.11921 10.8333 10.4999 10.8333Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default MapPinIcon;
