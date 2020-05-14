import React from 'react'
import styled from 'styled-components'

import { Right } from './Right'

const Icon = styled.div`
  transform: rotate(-180deg);
`

export const Left = ({ width, height, color }) => (
  <Icon>
    <Right width={width} height={height} color={color} />
  </Icon>
)
