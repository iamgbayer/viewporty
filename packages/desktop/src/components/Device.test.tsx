import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { equals } from 'ramda'

import { withDependencies } from 'helpers'
import { DEVICES } from 'constants'

import { Device } from './Device'

afterEach(cleanup)

const [device] = DEVICES

const { url, name, orientation, scale, userAgent, width, height } = device

test('Should render a Moto G4', () => {
  const dependencies = withDependencies()

  const { getByTestId } = render(
    dependencies(
      <Device
        url={url}
        name={name}
        width={equals(orientation, 'portrait') ? width : height}
        height={equals(orientation, 'portrait') ? height : width}
        scale={scale}
        orientation={orientation}
        userAgent={userAgent}
      />
    )
  )

  const deviceScale = getByTestId('device-scale').textContent
  const deviceDisplay = getByTestId('device-display')
  const deviceName = getByTestId('device-name').textContent

  expect(deviceScale).toMatch('75%')
  expect(deviceName).toMatch('Moto G4')

  expect(deviceDisplay).toHaveStyle(`
    width: 360px;
    transform: scale(0.75);
  `)
})
