import React from 'react'
import { motion } from 'framer-motion'

const GroupAnimated = motion.g

const transition = {
  // loop: Infinity,
  duration: 3
}

const smallDeviceAnimation = {
  x: -34
}
const mediumDeviceAnimation = {
  x: 12
}

const largeDeviceAnimation = {
  x: 12
}

export const OrganizeDevices = ({ width, height, color = 'red' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13Z"
        fill="black"
      />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="12"
        height="16"
      >
        <path
          d="M11 0H1C0.447715 0 0 0.397969 0 0.888889V15.1111C0 15.602 0.447715 16 1 16H11C11.5523 16 12 15.602 12 15.1111V0.888889C12 0.397969 11.5523 0 11 0Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)">
        <path
          d="M11 0H1C0.447715 0 0 0.397969 0 0.888889V15.1111C0 15.602 0.447715 16 1 16H11C11.5523 16 12 15.602 12 15.1111V0.888889C12 0.397969 11.5523 0 11 0Z"
          stroke="black"
          stroke-width="2.5"
        />
        <rect x="3" y="3" width="6" height="1" fill="black" />
        <rect x="3" y="5" width="6" height="1" fill="black" />
        <rect x="3" y="7" width="3" height="1" fill="black" />
      </g>
      <path
        d="M23 19.5C23.8284 19.5 24.5 18.8285 24.5 18C24.5 17.1716 23.8284 16.5 23 16.5C22.1716 16.5 21.5 17.1716 21.5 18C21.5 18.8285 22.1716 19.5 23 19.5Z"
        fill="black"
      />
      <mask
        id="mask1"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="14"
        y="0"
        width="18"
        height="24"
      >
        <path
          d="M30.5 0H15.5C14.6716 0 14 0.596954 14 1.33333V22.6667C14 23.403 14.6716 24 15.5 24H30.5C31.3284 24 32 23.403 32 22.6667V1.33333C32 0.596954 31.3284 0 30.5 0Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1)">
        <path
          d="M30.5 0H15.5C14.6716 0 14 0.596954 14 1.33333V22.6667C14 23.403 14.6716 24 15.5 24H30.5C31.3284 24 32 23.403 32 22.6667V1.33333C32 0.596954 31.3284 0 30.5 0Z"
          stroke="black"
          stroke-width="2.5"
        />
        <rect x="17" y="4" width="12" height="1" fill="black" />
        <rect x="17" y="6" width="12" height="1" fill="black" />
        <rect x="17" y="8" width="6" height="1" fill="black" />
      </g>
      <path
        d="M39 10.8334C39.4602 10.8334 39.8333 10.4603 39.8333 10C39.8333 9.53977 39.4602 9.16669 39 9.16669C38.5397 9.16669 38.1666 9.53977 38.1666 10C38.1666 10.4603 38.5397 10.8334 39 10.8334Z"
        fill="black"
      />
      <mask
        id="mask2"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="34"
        y="0"
        width="10"
        height="14"
      >
        <path
          d="M43.1667 0H34.8333C34.3731 0 34 0.331641 34 0.740741V12.5926C34 13.0017 34.3731 13.3333 34.8333 13.3333H43.1667C43.6269 13.3333 44 13.0017 44 12.5926V0.740741C44 0.331641 43.6269 0 43.1667 0Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask2)">
        <path
          d="M43.1667 0H34.8333C34.3731 0 34 0.331641 34 0.740741V12.5926C34 13.0017 34.3731 13.3333 34.8333 13.3333H43.1667C43.6269 13.3333 44 13.0017 44 12.5926V0.740741C44 0.331641 43.6269 0 43.1667 0Z"
          stroke="black"
          stroke-width="2"
        />
        <rect x="36" y="2" width="6" height="1" fill="black" />
        <rect x="36" y="4" width="6" height="1" fill="black" />
        <rect x="36" y="6" width="3" height="1" fill="black" />
      </g>
    </svg>
  )
}
