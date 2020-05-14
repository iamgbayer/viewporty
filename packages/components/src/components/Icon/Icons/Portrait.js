import React from 'react'
import styled from 'styled-components'

import { Phone } from './Phone'

const Rotate = styled.div`
  transform: rotate(-90deg);
`

export const Portrait = ({ width, height, color }) => (
  <Rotate>
    <Phone width={width} height={height} color={color} />
  </Rotate>
)
