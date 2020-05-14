import React from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import media from 'styled-media-query'

import { Text } from '@responsivy/components'

import secondWave from '@/assets/images/secondWave.svg'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 110px 0;
`
const SecondWave = styled.img`
  width: calc(70% - 5px);
  position: absolute;
  right: 0;
  top: 0;
  z-index: ${theme('zindex.negative')};
`

const Title = styled(Text)`
  font-size: ${theme('font.size.fortyFive')};
  text-align: center;

  ${media.greaterThan('medium')`
    font-size: ${theme('font.size.sixty')};
  `}
`

export default function Features() {
  return (
    <Container>
      <Title weight="bold">What we have?</Title>

      <SecondWave src={secondWave} />
    </Container>
  )
}
