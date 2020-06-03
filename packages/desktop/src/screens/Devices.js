import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useStoreState } from 'easy-peasy'
import { not, equals } from 'ramda'
import { theme, prop } from 'styled-tools'

import { Device, Devtools } from '@/components'
import { isValidUrl } from '@/helpers'

const Container = styled.div`
  width: ${prop('width')}px;
  height: ${prop('height')}px;
  overflow: scroll;
  padding: 40px;
  position: absolute;
  top: 36px;
  display: flex;
  flex-wrap: ${prop('align')};

  ::-webkit-scrollbar {
    background: transparent;
    width: 6px;
    height: 6px;
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

  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`

const Empty = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
`

export const Devices = () => {
  const { scale, isMenuCollapsed, align, isDevtoolsVisible } = useStoreState(
    ({ config }) => config
  )

  const getMenuWidth = () => (isMenuCollapsed ? 40 : 190)

  const getWidth = () => window.innerWidth - getMenuWidth()
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

  const whenNeedsSetSizes = () =>
    setSizes({
      width: getWidth(),
      height: getHeight()
    })

  useEffect(() => {
    window.addEventListener('resize', whenNeedsSetSizes)

    return () => window.removeEventListener('resize', whenNeedsSetSizes)
  }, [])

  useEffect(() => {
    whenNeedsSetSizes()
  }, [isMenuCollapsed])

  const { width, height } = sizes

  return (
    <Container width={width} height={height} align={align}>
      {url &&
        devices
          .filter(({ isHidden }) => not(isHidden))
          .map(({ name, width, height, userAgent, orientation }) => (
            <Device
              url={url}
              name={name}
              key={`${name}-${orientation}`}
              width={equals(orientation, 'portrait') ? width : height}
              height={equals(orientation, 'portrait') ? height : width}
              scale={scale}
              orientation={orientation}
              userAgent={userAgent}
            />
          ))}

      {isDevtoolsVisible && <Devtools />}

      {not(url) && <Empty />}
    </Container>
  )
}
