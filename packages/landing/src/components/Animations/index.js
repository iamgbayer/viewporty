import React from 'react'
import styled from 'styled-components'

import { Organize } from './Organize'

const Container = styled.div`
  width: 100%;
`

export const Animations = () => {
  return (
    <Container>
      <Organize />
    </Container>
  )
}
