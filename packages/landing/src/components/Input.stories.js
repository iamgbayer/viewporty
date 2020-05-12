import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Input } from '@components/Input'
import { Icon } from '@components/Icon'

const Fillable = ({ children }) => {
  const [value, setValue] = useState('')

  return <>{children({ value, setValue })}</>
}

const Inputs = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
`

storiesOf(`${GROUPS.COMPONENTS}|Input`, module)
  .addDecorator(story => (
    <Container>
      <Reset />
      {story()}
    </Container>
  ))
  .add('Variant', () => (
    <Fillable>
      {({ value, setValue }) => (
        <Input
          variant="primary"
          placeholder="First name"
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
      )}
    </Fillable>
  ))
  .add('Size', () => (
    <Inputs>
      <Input placeholder="Default" />
      <Input size="large" placeholder="Large" />
    </Inputs>
  ))
  .add('Full', () => (
    <>
      <Input full={true} placeholder="Full size" />
    </>
  ))
  .add('With label', () => <Input label="First name" />)
  .add('Disabled', () => <Input label="First name" disabled={true} />)
  .add('With something wrong', () => (
    <Input
      placeholder="First name"
      error={{
        has: true,
        message: "Isn't a valid name"
      }}
    />
  ))
