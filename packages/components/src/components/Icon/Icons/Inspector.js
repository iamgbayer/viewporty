import React from 'react'

export const Inspector = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 39 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.7526 34.9326H5.5C3.84314 34.9326 2.5 33.5895 2.5 31.9326V5C2.5 3.34315 3.84315 2 5.5 2H32.1219C33.7788 2 35.1219 3.34315 35.1219 5V11.9419"
      stroke={color}
      strokeWidth="3"
    />
    <path
      d="M22.358 36.9679L17 15L38.7 20.8938L30.9309 26.2518L38.7 34.021L35.7531 36.9679L28.2519 28.663L22.358 36.9679Z"
      fill={color}
    />
  </svg>
)
