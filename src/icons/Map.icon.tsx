import React from 'react';
import Svg, { Path, ClipPath, Defs, Rect, G } from 'react-native-svg';

const MapIcon = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Defs>
        <ClipPath id="clip0_385_9">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0_385_9)">
        <Path
          d="M7.36258 11.6667H4.16675C3.99719 11.6759 3.83451 11.7367 3.70047 11.841C3.56643 11.9452 3.46744 12.088 3.41675 12.25L1.75008 17.25C1.66675 17.3334 1.66675 17.4167 1.66675 17.5C1.66675 18 2.00008 18.3334 2.50008 18.3334H17.5001C18.0001 18.3334 18.3334 18 18.3334 17.5C18.3334 17.4167 18.3334 17.3334 18.2501 17.25L16.5834 12.25C16.5327 12.088 16.4337 11.9452 16.2997 11.841C16.1657 11.7367 16.003 11.6759 15.8334 11.6667H12.6376M15.0001 6.66669C15.0001 10.4167 10.0001 14.1667 10.0001 14.1667C10.0001 14.1667 5.00008 10.4167 5.00008 6.66669C5.00008 5.3406 5.52687 4.06884 6.46455 3.13115C7.40223 2.19347 8.674 1.66669 10.0001 1.66669C11.3262 1.66669 12.5979 2.19347 13.5356 3.13115C14.4733 4.06884 15.0001 5.3406 15.0001 6.66669ZM11.6667 6.66669C11.6667 7.58716 10.9206 8.33335 10.0001 8.33335C9.07961 8.33335 8.33342 7.58716 8.33342 6.66669C8.33342 5.74621 9.07961 5.00002 10.0001 5.00002C10.9206 5.00002 11.6667 5.74621 11.6667 6.66669Z"
          stroke="#016FEE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </G>
    </Svg>
  );
};

export default MapIcon;
