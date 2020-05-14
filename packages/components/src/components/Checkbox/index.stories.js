import React, { useState } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Checkbox } from '@components/Checkbox'

const Containerable = styled(Container)`
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Toggle = ({ label, labelAlign, id, disabled, size }) => {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      id={id}
      size={size}
      label={label}
      labelAlign={labelAlign}
      disabled={disabled}
      checked={checked}
      onChange={({ target }) => setChecked(target.checked)}
    />
  )
}

storiesOf(`${GROUPS.COMPONENTS}|Checkbox`, module)
  .addDecorator(story => (
    <Containerable>
      <Reset />
      {story()}
    </Containerable>
  ))
  .add('Default', () => (
    <>
      <Toggle id="open" label="Open" />
      <Toggle id="underReview" label="Under Review" labelAlign="right" />
      <Toggle id="planned" label="Planned" labelAlign="top" />
      <Toggle id="inProgress" label="In Progress" labelAlign="left" />
    </>
  ))
  .add('Large', () => (
    <>
      <Toggle id="open" label="Open" size="large" />
      <Toggle
        id="underReview"
        label="Under Review"
        labelAlign="right"
        size="large"
      />
      <Toggle id="planned" label="Planned" labelAlign="top" size="large" />
      <Toggle
        id="inProgress"
        label="In Progress"
        labelAlign="left"
        size="large"
      />
    </>
  ))
  .add('Disabled', () => (
    <>
      <Toggle id="banana" label="Default" disabled={true} />
      <Toggle id="apple" label="Large" disabled={true} size="large" />
    </>
  ))
