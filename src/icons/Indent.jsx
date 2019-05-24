// @flow
import React from 'react';
import type { IconProps } from './index';

export default ({ active = false }:IconProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 4H2V6H18V4ZM18 14H2V16H18V14ZM8 9H18V11H8V9ZM2.00001 13L7.19617 10L2.00001 7V13Z"
      fill={active ? '#404041' : '#9F9FA0'}
    />
  </svg>
);
