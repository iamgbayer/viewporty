import React from 'react'

export const Maximize = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
  >
    <path fill="none" stroke={color} strokeWidth="2" d="M6 6h50v50H6z" />
  </svg>
)
