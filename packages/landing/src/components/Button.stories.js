import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Button } from '@components/Button'
import { Icon } from '@components/Icon'

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`

storiesOf(`${GROUPS.COMPONENTS}|Button`, module)
  .addDecorator(story => (
    <Container>
      <Reset />
      {story()}
    </Container>
  ))
  .add('Variant', () => (
    <Buttons>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </Buttons>
  ))
  .add('Disabled', () => (
    <>
      <Button disabled={true}>Disabled</Button>
    </>
  ))
  .add('With link', () => (
    <>
      <Button href="https://google.com">Open Google</Button>
    </>
  ))
  .add('Size', () => (
    <Buttons>
      <Button>Default</Button>
      <Button size="large">Large</Button>
    </Buttons>
  ))
  .add('Full', () => (
    <>
      <Button full={true}>Full</Button>
    </>
  ))
  .add('With icon', () => (
    <>
      <Button
        full={true}
        icon={({ color, width, height }) => (
          <Icon name="right" width={width} height={height} color={color} />
        )}
      >
        Primary
      </Button>
    </>
  ))
