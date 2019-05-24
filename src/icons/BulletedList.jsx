// @flow
import React from 'react';
import type { IconProps } from './index';

export default ({active = false}:IconProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 6.5C3.82843 6.5 4.5 5.82843 4.5 5C4.5 4.17157 3.82843 3.5 3 3.5C2.17157 3.5 1.5 4.17157 1.5 5C1.5 5.82843 2.17157 6.5 3 6.5ZM18 4H7V6H18V4ZM18 14H7V16H18V14ZM7 9H18V11H7V9ZM4.5 10C4.5 10.8284 3.82843 11.5 3 11.5C2.17157 11.5 1.5 10.8284 1.5 10C1.5 9.17157 2.17157 8.5 3 8.5C3.82843 8.5 4.5 9.17157 4.5 10ZM3 16.5C3.82843 16.5 4.5 15.8284 4.5 15C4.5 14.1716 3.82843 13.5 3 13.5C2.17157 13.5 1.5 14.1716 1.5 15C1.5 15.8284 2.17157 16.5 3 16.5Z"
      fill={ active ? "#404041" : "#9F9FA0"}
    />
  </svg>
);
