import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useStoreState } from 'easy-peasy'
import { not, equals } from 'ramda'
import { theme, prop } from 'styled-tools'

import { Device } from '@/components'
import { isValidUrl } from '@/utils'

const Container = styled.div`
  width: ${prop('width')}px;
  height: ${prop('height')}px;
  overflow: scroll;
  padding: 40px;
  position: absolute;
  top: 36px;

  ::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }

  ::-webkit-scrollbar * {
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    border: solid transparent;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${theme('colors.one')};
  }
`

const Empty = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
`

export const Devices = () => {
  const getWidth = () => window.innerWidth - 190
  const getHeight = () => window.innerHeight - 36

  const [sizes, setSizes] = useState({
    width: getWidth(),
    height: getHeight()
  })

  const { url, devices } = useStoreState(
    ({ history, devices }) => ({
      url: history.url,
      devices: devices.data
    }),
    equals
  )

  const onResize = () =>
    setSizes({
      width: getWidth(),
      height: getHeight()
    })

  useEffect(() => {
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  const { width, height } = sizes

  return (
    <Container width={width} height={height}>
      {devices
        .filter(({ isHidden }) => not(isHidden))
        .map(({ name, width, height, userAgent, zoom, orientation }) => (
          <Device
            url={url}
            name={name}
            key={`${name}-${orientation}`}
            width={equals(orientation, 'portrait') ? width : height}
            zoom={zoom}
            height={equals(orientation, 'portrait') ? height : width}
            orientation={orientation}
            userAgent={userAgent}
          />
        ))}

      {not(isValidUrl(url)) && <Empty />}
    </Container>
  )
}
