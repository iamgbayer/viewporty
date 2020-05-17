import React from 'react'

export const EyeClosed = ({ width, height, color }) => (
  // <svg
  //   width={width}
  //   height={height}
  //   version="1.1"
  //   xmlns="http://www.w3.org/2000/svg"
  //   x="0px"
  //   y="0px"
  //   viewBox="-49 141 512 512"
  // >
  //   <path
  //     fill={color}
  //     d="M459.7,387c-4.6-6.3-113.6-153.2-252.7-153.2S-41.2,380.8-45.8,387c-4.3,5.9-4.3,14,0,19.9
  // 		c4.6,6.3,113.6,153.2,252.7,153.2s248.2-147,252.7-153.2C464.1,401,464.1,393,459.7,387z"
  //   />
  // </svg>
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <path
        d="M19.8729 8.61096C19.6942 8.36655 15.4371 2.62634 9.9999 2.62634C4.56274 2.62634 0.305391 8.36655 0.126914 8.61073C-0.0423048 8.84261 -0.0423048 9.1571 0.126914 9.38897C0.305391 9.63339 4.56274 15.3736 9.9999 15.3736C15.4371 15.3736 19.6942 9.63335 19.8729 9.38917C20.0423 9.15733 20.0423 8.8426 19.8729 8.61096ZM9.9999 14.0549C5.99486 14.0549 2.52606 10.245 1.49922 8.99952C2.52473 7.75292 5.98626 3.94502 9.9999 3.94502C14.0048 3.94502 17.4733 7.75424 18.5006 9.00042C17.4751 10.247 14.0135 14.0549 9.9999 14.0549Z"
        fill={color}
      />
      <path
        d="M9.99988 5.04401C7.81855 5.04401 6.04382 6.81874 6.04382 9.00007C6.04382 11.1814 7.81855 12.9561 9.99988 12.9561C12.1812 12.9561 13.9559 11.1814 13.9559 9.00007C13.9559 6.81874 12.1812 5.04401 9.99988 5.04401ZM9.99988 11.6374C8.54558 11.6374 7.36253 10.4543 7.36253 9.00007C7.36253 7.54581 8.54562 6.36272 9.99988 6.36272C11.4541 6.36272 12.6372 7.54581 12.6372 9.00007C12.6372 10.4543 11.4542 11.6374 9.99988 11.6374Z"
        fill={color}
      />

      <rect
        x="2"
        y="1.52301"
        width="1.5"
        height="21.8365"
        transform="rotate(-45 2 1.52301)"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="20" height="17" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
