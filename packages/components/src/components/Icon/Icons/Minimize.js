import React from 'react'

export const Minimize = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
  >
    <path
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M48 32H16"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
)
