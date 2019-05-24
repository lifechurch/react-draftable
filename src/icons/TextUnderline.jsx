// @flow
import React from 'react';
import type { IconProps } from './index';

export default ({ active = false }:IconProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.3021 9.93C15.3021 13.167 13.5276 15.234 9.9981 15.234C6.4686 15.234 4.6941 13.1475 4.6941 9.9495V1.9935H6.3126V9.9105C6.3126 12.2895 7.5996 13.791 9.9981 13.791C12.3966 13.791 13.6836 12.2895 13.6836 9.9105V1.9935H15.3021V9.93ZM17 16H3V18H17V16Z"
      fill={active ? '#404041' : '#9F9FA0'}
    />
  </svg>
);
