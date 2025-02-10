import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../core/interface/icon.interface';

const SearchIcon: React.FC<IconProps> = ({
  size = 28,
  color = 'black',
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        d="M24.5002 24.4999L19.4836 19.4833M22.1667 12.8333C22.1667 17.988 17.988 22.1667 12.8333 22.1667C7.67868 22.1667 3.5 17.988 3.5 12.8333C3.5 7.67868 7.67868 3.5 12.8333 3.5C17.988 3.5 22.1667 7.67868 22.1667 12.8333Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SearchIcon;
