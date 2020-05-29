import React from 'react'
import styled from 'styled-components'

import { Button, Text } from '@viewporty/components'

const Description = styled(Text)`
  max-width: 600px;
`

const Container = styled.div`
  padding: 80px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function OpenSource() {
  return (
    <Container>
      <Description fontSize={5} textAlign="center" fontWeight={3}>
        And more will come with your help. Now, don't waste time and check it
        out!
      </Description>

      <Button
        variant="secondary"
        onClick={() => window.open('https://github.com/iamgbayer/viewporty')}
        marginTop={20}
      >
        It's open source!
      </Button>
    </Container>
  )
}
