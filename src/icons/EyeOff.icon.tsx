import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../core/interface/icon.interface';

const EyeOffIcon: React.FC<IconProps> = ({ size = 24, color = '#71717A' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.87988 9.87988C9.58514 10.1545 9.34873 10.4857 9.18476 10.8537C9.02079 11.2217 8.93262 11.619 8.92552 12.0218C8.91841 12.4246 8.99251 12.8247 9.14339 13.1983C9.29428 13.5718 9.51885 13.9112 9.80373 14.196C10.0886 14.4809 10.4279 14.7055 10.8015 14.8564C11.175 15.0073 11.5752 15.0814 11.978 15.0742C12.3808 15.0671 12.778 14.979 13.146 14.815C13.514 14.651 13.8452 14.4146 14.1199 14.1199M10.73 5.08C11.1513 5.02751 11.5754 5.00079 12 5C19 5 22 12 22 12C21.5529 12.9571 20.9922 13.8569 20.33 14.68M6.61 6.61011C4.62125 7.96473 3.02987 9.82537 2 12.0001C2 12.0001 5 19.0001 12 19.0001C13.9159 19.0052 15.7908 18.4452 17.39 17.3901M2 2L22 22"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default EyeOffIcon;
