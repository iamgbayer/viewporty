import React from 'react'
import { motion } from 'framer-motion'

const GroupAnimated = motion.g

const smallDeviceAnimation = {
  y: 2
}

const largeDeviceAnimation = {
  y: 6
}

const transition = {
  loop: Infinity,
  duration: 2
}

export const SyncedDevices = ({ width, height, color }) => {
  console.log(color)
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 15C6.55228 15 7 14.5523 7 14C7 13.4477 6.55228 13 6 13C5.44771 13 5 13.4477 5 14C5 14.5523 5.44771 15 6 15Z"
        fill={color}
      />
      <mask
        id="mask0"
        maskUnits="userSpaceOnUse"
        x="0"
        y="2"
        width="12"
        height="16"
      >
        <path
          d="M11 2H1C0.447715 2 0 2.39797 0 2.88889V17.1111C0 17.602 0.447715 18 1 18H11C11.5523 18 12 17.602 12 17.1111V2.88889C12 2.39797 11.5523 2 11 2Z"
          fill="white"
        />
      </mask>

      <g mask="url(#mask0)">
        <path
          d="M11 2H1C0.447715 2 0 2.39797 0 2.88889V17.1111C0 17.602 0.447715 18 1 18H11C11.5523 18 12 17.602 12 17.1111V2.88889C12 2.39797 11.5523 2 11 2Z"
          stroke={color}
          strokeWidth="2"
        />
        <GroupAnimated animate={smallDeviceAnimation} transition={transition}>
          <rect x="3" y="5" width="6" height="1" fill={color} />
          <rect x="3" y="7" width="6" height="1" fill={color} />
          <rect x="3" y="9" width="3" height="1" fill={color} />
        </GroupAnimated>
      </g>

      <path
        d="M24 19.5C24.8284 19.5 25.5 18.8285 25.5 18C25.5 17.1716 24.8284 16.5 24 16.5C23.1716 16.5 22.5 17.1716 22.5 18C22.5 18.8285 23.1716 19.5 24 19.5Z"
        fill={color}
      />

      <mask
        id="mask1"
        maskUnits="userSpaceOnUse"
        x="15"
        y="0"
        width="18"
        height="24"
      >
        <path
          d="M31.5 0H16.5C15.6716 0 15 0.596954 15 1.33333V22.6667C15 23.403 15.6716 24 16.5 24H31.5C32.3284 24 33 23.403 33 22.6667V1.33333C33 0.596954 32.3284 0 31.5 0Z"
          fill="white"
        />
      </mask>

      <g mask="url(#mask1)">
        <path
          d="M31.5 0H16.5C15.6716 0 15 0.596954 15 1.33333V22.6667C15 23.403 15.6716 24 16.5 24H31.5C32.3284 24 33 23.403 33 22.6667V1.33333C33 0.596954 32.3284 0 31.5 0Z"
          stroke={color}
          strokeWidth="2"
        />
        <GroupAnimated animate={largeDeviceAnimation} transition={transition}>
          <rect x="18" y="4" width="12" height="1" fill={color} />
          <rect x="18" y="6" width="12" height="1" fill={color} />
          <rect x="18" y="8" width="6" height="1" fill={color} />
        </GroupAnimated>
      </g>
    </svg>
  )
}
