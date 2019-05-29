// @flow
import React from 'react';
import type { IconProps } from './index';

export default ({ color }:IconProps) => (
  <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.68178 16L12.3265 4H14.34L14.7807 2H12.7672H11.7717H11.34H10.7762H8.78075L8.33997 4H10.3355L7.69078 16H5.69078L5.25 18H7.25H8.25H8.74998H9.241H11.25L11.6908 16H9.68178Z'
      fill={color}
    />
  </svg>
);
