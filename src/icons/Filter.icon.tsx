import React from 'react';
import Svg, { Path } from 'react-native-svg';

const FilterIcon = (): React.JSX.Element => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 5H21"
        stroke="#016FEE"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M6 12H18"
        stroke="#016FEE"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M10 19H14"
        stroke="#016FEE"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default FilterIcon;



