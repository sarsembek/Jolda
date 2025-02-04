import React from 'react';
import Svg, { Path } from 'react-native-svg';

const LogoIcon = (): React.JSX.Element => {
  return (
    <Svg
      width="22"
      height="32"
      viewBox="0 0 22 32"
      fill="none"
    >
      <Path
        d="M0 21.3333C-1.22459e-07 22.7341 0.275901 24.1212 0.811951 25.4153C1.348 26.7094 2.1337 27.8853 3.12419 28.8758C4.11469 29.8663 5.29057 30.652 6.58471 31.1881C7.87885 31.7241 9.2659 32 10.6667 32V21.3333L0 21.3333Z"
        fill="#016FEE"
      />
      <Path
        d="M10.6667 0H21.3334V10.6667C21.3334 16.5577 16.5577 21.3333 10.6667 21.3333V0Z"
        fill="#016FEE"
      />
    </Svg>
  );
};

export default LogoIcon;
