import React from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'

import secondWave from '@/assets/images/secondWave.svg'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`
const SecondWave = styled.img`
  width: calc(70% - 5px);
  position: absolute;
  right: 0;
  top: 0;
  z-index: ${theme('zindex.behind')};
`

export default function Features() {
  return (
    <Container>
      <SecondWave src={secondWave} />
    </Container>
  )
}
