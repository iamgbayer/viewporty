import React from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import { width, height } from 'styled-system'

const Container = styled.div`
  .st0 {
    fill: ${theme('colors.secondary')};
  }

  .st1 {
    opacity: 0.8;
    fill: ${theme('colors.support.tertiary')};
    enable-background: new;
  }

  .st2 {
    fill: #344356;
  }

  .st3 {
    font-family: ${theme('font.family.primary')};
    font-weight: ${theme('font.weight.bold')};
  }

  .st4 {
    font-size: 80px;
  }
`

const Svg = styled.svg`
  ${width}
  ${height}
`

export function Logo({ width, height }) {
  return (
    <Container>
      <Svg
        width={width}
        height={height}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="-148.4 265 398.4 109.2"
      >
        <path
          fill="#3D56F0"
          d="M-128.8,291.2c0-3.3,2.7-6,6-6l44.7,0.1c5.3,0,8,6.5,4.2,10.2l-44.6,44.6c-3.8,3.8-10.2,1.1-10.2-4.2
	L-128.8,291.2z"
        />
        <path
          opacity={0.8}
          fill="#5468FF"
          d="M-147.8,271.5c0-3.3,2.7-6,6-6l64.9,0.2c5.3,0,8,6.5,4.2,10.2l-64.8,64.8c-3.8,3.8-10.2,1.1-10.2-4.2
	L-147.8,271.5z"
        />
        <path
          fill="#344356"
          d="M-70.1,360.3h8.1v-19.2h5.5l11.1,19.2h9.2l-12.5-20c5.1-1.8,8.8-6,8.8-11.7c0-8.3-7.1-13.1-15.5-13.1h-14.5
	V360.3z M-62,334.5v-11.8h6.4c4.6,0,7.5,2.4,7.5,6c0,3.4-2.5,5.6-6.8,5.8H-62z M-19.2,360.7c5.3,0,9.5-1.5,13.2-5.5l-5.3-4.7
	c-2.3,2.3-4.5,2.9-7.9,2.9c-4.6,0-7.1-2.6-7.6-6.5h21.8c0,0,0.3-1,0.3-2.4c0-8.2-3.4-16.4-15-16.4c-10.3,0-15.3,8.1-15.3,16.4
	C-35.1,353.1-29.8,360.7-19.2,360.7z M-26.9,341.4c0.6-3.8,2.8-6.7,7.1-6.7c4.6,0,6.8,2.4,7.3,6.7H-26.9z M11.4,360.9
	c6,0,12.3-3.3,12.3-10.6c0-11.6-16.1-8.8-16.1-13.6c0-1.5,1.6-2.5,4.1-2.5c3.4,0,5.2,1.9,6.3,3.8l5.5-3c-2.1-3.7-6-7-11.9-7
	c-5.7,0-11.4,3-11.4,9.7c0,11.1,15.9,7.6,15.9,12.9c0,1.7-1.6,3.8-5.1,3.8c-4.2,0-5.9-2.9-6.8-5.2l-6.2,2.7
	C-0.3,356.9,4.7,360.9,11.4,360.9z M30.3,374.2h7.9v-17.1c2.2,2.7,5.7,3.8,9.1,3.8c8.6,0,13.5-7.7,13.5-16.5s-4.9-16.5-13.5-16.5
	c-3.4,0-6.7,0.9-9.1,3.8v-3.2h-7.9V374.2z M45.3,353.8c-5.2,0-7.5-4-7.5-9.4c0-5.3,2.3-9.6,7.5-9.6c5.1,0,7.6,4.2,7.6,9.6
	C52.9,349.8,50.4,353.8,45.3,353.8z M81.3,360.9c9.8,0,16.6-7.4,16.6-16.4s-6.8-16.4-16.6-16.4s-16.6,7.4-16.6,16.4
	S71.5,360.9,81.3,360.9z M81.3,354.2c-5.9,0-8.2-4.5-8.2-9.7c0-5.2,2.3-9.7,8.2-9.7c5.8,0,8.2,4.5,8.2,9.7
	C89.5,349.8,87.1,354.2,81.3,354.2z M104.7,360.3h7.9v-17.4c0-4,3.6-7.7,7.9-7.7c4,0,5.1,3.1,5.1,7v18.1h7.9v-19
	c0-6.6-3.4-13.2-11.7-13.2c-3.1,0-6.6,1.1-9.2,4.2v-3.7h-7.9V360.3z M152.3,360.9c6,0,12.4-3.3,12.4-10.6c0-11.6-16.1-8.8-16.1-13.6
	c0-1.5,1.6-2.5,4.1-2.5c3.4,0,5.2,1.9,6.3,3.8l5.5-3c-2.1-3.7-6-7-11.9-7c-5.7,0-11.4,3-11.4,9.7c0,11.1,15.9,7.6,15.9,12.9
	c0,1.7-1.6,3.8-5.1,3.8c-4.2,0-5.9-2.9-6.8-5.2l-6.2,2.7C140.5,356.9,145.6,360.9,152.3,360.9z M170.7,322.6h8.1v-7.2h-8.1V322.6z
	 M171,360.3h7.7v-31.7H171V360.3z M196.5,360.3h6.4l12.9-31.7h-8.4l-7.7,21.7l-7.7-21.7h-8.5L196.5,360.3z M223,373.9h8.4l18.1-45.4
	h-8.5l-8.1,22l-8-22h-8.5l12.4,30.9L223,373.9z"
        />
      </Svg>
    </Container>
  )
}
