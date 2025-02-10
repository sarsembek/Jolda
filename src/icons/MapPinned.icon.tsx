import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../core/interface/icon.interface';

const MapPinnedIcon: React.FC<IconProps> = ({ size = 20, color = '#016FEE' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 21" fill="none">
      <Path
        d="M7.36258 12.1667H4.16675C3.99719 12.1759 3.83451 12.2367 3.70047 12.341C3.56643 12.4452 3.46744 12.588 3.41675 12.75L1.75008 17.75C1.66675 17.8334 1.66675 17.9167 1.66675 18C1.66675 18.5 2.00008 18.8334 2.50008 18.8334H17.5001C18.0001 18.8334 18.3334 18.5 18.3334 18C18.3334 17.9167 18.3334 17.8334 18.2501 17.75L16.5834 12.75C16.5327 12.588 16.4337 12.4452 16.2997 12.341C16.1657 12.2367 16.003 12.1759 15.8334 12.1667H12.6376"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.0001 7.16669C15.0001 10.9167 10.0001 14.6667 10.0001 14.6667C10.0001 14.6667 5.00008 10.9167 5.00008 7.16669C5.00008 5.8406 5.52687 4.56884 6.46455 3.63115C7.40223 2.69347 8.674 2.16669 10.0001 2.16669C11.3262 2.16669 12.5979 2.69347 13.5356 3.63115C14.4733 4.56884 15.0001 5.8406 15.0001 7.16669Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.6667 7.16669C11.6667 8.08716 10.9206 8.83335 10.0001 8.83335C9.07961 8.83335 8.33342 8.08716 8.33342 7.16669C8.33342 6.24621 9.07961 5.50002 10.0001 5.50002C10.9206 5.50002 11.6667 6.24621 11.6667 7.16669Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default MapPinnedIcon;
