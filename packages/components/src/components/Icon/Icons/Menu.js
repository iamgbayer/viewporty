import React from 'react'

export const Menu = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    role="img"
  >
    <path
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="4"
      d="M14 18h36M14 32h36"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
    <path
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="4"
      d="M14 46h36"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
  </svg>
)
