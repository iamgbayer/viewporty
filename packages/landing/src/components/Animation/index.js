import React from 'react'
import styled from 'styled-components'
import { always } from 'ramda'

import { Organize } from './Organize'
import { Sync } from './Sync'

const Container = styled.div`
  width: 100%;
`

export const Animation = ({ type = 'organize', width, height }) => {
  const mapping = {
    organize: always(<Organize width={width} height={height} />),
    sync: always(<Sync width={width} height={height} />)
  }

  const Animable = mapping[type]

  return (
    <Container>
      <Animable />
    </Container>
  )
}
