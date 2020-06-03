import React, { useRef, useEffect, useContext, memo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { prop, theme } from 'styled-tools'
import { isNil, not, equals } from 'ramda'
import { useStoreActions } from 'easy-peasy'

import { Text } from '@viewporty/components'
import { once, removeListener, EVENTS } from '@/emitter'
import { percentage } from '@/helpers'

const { remote } = window.require('electron')

const Container = styled.div`
  display: inline-block;
  margin-right: calc(-${prop('right')}px + 40px);
  margin-bottom: calc(-${prop('bottom')}px + 40px);
`

const Display = styled.div`
  transform: scale(${prop('scale')});
  transform-origin: 0 0;
  width: ${prop('width')}px;
  box-shadow: ${theme('shadow.one')};

  & > webview {
    background-color: ${theme('colors.thirteen')};
    height: ${prop('height')}px;
  }
`

const Controls = styled.div`
  margin-bottom: 5px;
`

const Scale = styled.span`
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    color: ${theme('colors.three')};
  }
`

export const Device = memo(({ url, name, width, height, userAgent, scale }) => {
  const ref = useRef()
  const { setUrl } = useStoreActions(({ history }) => history)
  const { colors } = useContext(ThemeContext)

  useEffect(() => {
    const webview = ref.current

    if (isNil(webview)) {
      return
    }

    webview.addEventListener('dom-ready', () => {
      const { webContents } = webview.getWebContents()
      webview.openDevTools()

      once(EVENTS.reload, (url) => webContents.loadURL(url))

      webContents.enableDeviceEmulation({
        screenPosition: 'mobile'
      })

      webview.addEventListener(
        'will-navigate',
        (event) => not(equals(event.url, url)) && setUrl(event.url)
      )
    })

    return () => removeListener(EVENTS.reload)
  }, [])

  return (
    <Container
      data-testid="device-container"
      bottom={height - percentage(scale, height)}
      right={width - percentage(scale, width)}
    >
      <Controls>
        <Text
          data-testid="device-name"
          color={colors.three}
          fontSize={1}
          marginBottom="5px"
        >
          {name}
        </Text>
        <Text color={colors.five} fontSize={0}>
          ({width} x {height}){' '}
          <Scale data-testid="device-scale">{scale}%</Scale>
        </Text>
      </Controls>

      <Display
        data-testid="device-display"
        width={width}
        height={height}
        scale={scale / 100}
      >
        <webview
          id="webview"
          useragent={userAgent}
          ref={ref}
          src={url}
          preload={`file://${remote.app.getAppPath()}/public/preload.js`}
        />
      </Display>
    </Container>
  )
})
