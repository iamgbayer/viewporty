import React from 'react'
import styled from 'styled-components'
import { always } from 'ramda'

import { Organize } from './Organize'
import { Success } from './Success'

const Container = styled.div`
  width: 100%;
`

export const Animation = ({ type = 'organize', width, height, color }) => {
  const mapping = {
    organize: always(<Organize />),
    success: always(<Success width={width} height={height} color={color} />)
  }

  const Animable = mapping[type]

  return (
    <Container>
      <Animable />
    </Container>
  )
}
