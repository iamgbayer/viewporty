import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

const Svg = styled.svg`
  ${space}
  display: flex;
  width: max-content;
  justify-content: center;

  @keyframes checkmark {
    0% {
      stroke-dashoffset: 50px;
    }

    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes circle {
    0% {
      stroke-dashoffset: 240px;
    }

    100% {
      stroke-dashoffset: 480px;
    }
  }

  path {
    animation: checkmark 0.25s ease-in-out 0.7s backwards;
    animation-delay: 0.5s;
  }

  circle {
    animation: circle 0.6s ease-in-out backwards;
    animation-delay: 2s;
  }
`

export const Success = ({ width, height, color = '#8ec343' }) => {
  return (
    <Svg
      width={width}
      height={height}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="-277.6 374.5 45.2 45.1"
    >
      <circle
        fill="none"
        stroke={color}
        strokeWidth="2"
        cx="-255"
        cy="397"
        r="21.3"
        // strokeDasharray="240px"
        // strokeDashoffset="480px"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth="2"
        d="M-268.5,399.1l7.6,7.6l19.4-19.4"
        strokeDasharray="50px"
        strokeDashoffset="0px"
      />
    </Svg>
  )
}
