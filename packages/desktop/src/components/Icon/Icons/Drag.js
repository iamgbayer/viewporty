import React from 'react'

export const Drag = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width={width}
    height={height}
    role="img"
  >
    <path
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M14 18h36M14 32h36"
      strokeLinejoin="round"
      strokeLinecap="round"
    />

    <path
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M14 46h36"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
)
