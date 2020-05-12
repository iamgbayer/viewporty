import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Select } from '@components/Select'

const Fillable = ({ children }) => {
  const [value, setValue] = useState('')

  const options = [
    { value: 1, text: 'Open' },
    { value: 2, text: 'Under Review' },
    { value: 3, text: 'Planned' },
    { value: 4, text: 'In Progress' },
    { value: 5, text: 'Complete' },
    { value: 6, text: 'Closed' }
  ]

  return <>{children({ value, setValue, options })}</>
}

const Selects = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
`

storiesOf(`${GROUPS.COMPONENTS}|Select`, module)
  .addDecorator(story => (
    <Container>
      <Reset />
      {story()}
    </Container>
  ))
  .add('Variant', () => (
    <Fillable>
      {({ value, setValue, options }) => (
        <Select
          placeholder="First name"
          value={value}
          onChange={({ target }) => setValue(target.value)}
          options={options}
        />
      )}
    </Fillable>
  ))

  .add('Size', () => (
    <Fillable>
      {({ options }) => (
        <Selects>
          <Select placeholder="Default" options={options} />
          <Select size="large" placeholder="Large" options={options} />
        </Selects>
      )}
    </Fillable>
  ))
  .add('Full', () => (
    <Fillable>
      {({ options }) => (
        <Select full={true} placeholder="Full size" options={options} />
      )}
    </Fillable>
  ))
  .add('With label', () => (
    <Fillable>
      {({ options }) => <Select full={true} label="Label" options={options} />}
    </Fillable>
  ))
  .add('Disabled', () => (
    <Fillable>
      {({ options }) => <Select disabled={true} options={options} />}
    </Fillable>
  ))
