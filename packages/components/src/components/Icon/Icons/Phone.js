import React from 'react'

export const Phone = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13Z"
      fill={color}
    />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width={width}
      height={height}
    >
      <path
        d="M11 0H1C0.447715 0 0 0.397969 0 0.888889V15.1111C0 15.602 0.447715 16 1 16H11C11.5523 16 12 15.602 12 15.1111V0.888889C12 0.397969 11.5523 0 11 0Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0)">
      <path
        d="M11 0H1C0.447715 0 0 0.397969 0 0.888889V15.1111C0 15.602 0.447715 16 1 16H11C11.5523 16 12 15.602 12 15.1111V0.888889C12 0.397969 11.5523 0 11 0Z"
        stroke={color}
        strokeWidth="2.5"
      />
    </g>
  </svg>
)
