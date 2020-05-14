import React, { useRef, useEffect, useContext, memo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { prop, theme } from 'styled-tools'
import { isNil, not, equals } from 'ramda'
import { useStoreActions } from 'easy-peasy'

import { Text } from '@responsivy/components'

import { once, removeListener, EVENTS } from '@/emitter'

const { remote } = window.require('electron')

const Container = styled.div`
  float: left;
  display: inline-block;
  margin-right: 35px;
  margin-bottom: 35px;
`

const Display = styled.div`
  box-shadow: ${theme('shadow.one')};

  & > webview {
    width: ${prop('width')}px;
    height: ${prop('height')}px;
    display: flex;
  }
`

const Controls = styled.div`
  margin-bottom: 5px;
`

const Zoom = styled.span`
  cursor: pointer;

  &:hover {
    color: ${theme('colors.three')};
  }
`

export const Device = memo(
  ({ url, name, width, height, userAgent, zoom, orientation }) => {
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
        // webview.openDevTools()

        once(EVENTS.reload, (url) => webContents.loadURL(url))

        webContents.enableDeviceEmulation({
          screenPosition: 'mobile',
          screenSize: {
            width,
            height
          },
          viewSize: {
            width,
            height
          }
        })

        webview.addEventListener(
          'will-navigate',
          (event) => not(equals(event.url, url)) && setUrl(event.url)
        )
      })

      return () => removeListener(EVENTS.reload)
    }, [])

    return (
      <Container>
        <Controls>
          <Text color={colors.three}>{name}</Text>
          <Text color={colors.five} size="thirteen">
            ({width} x {height}) <Zoom>{zoom}%</Zoom>
          </Text>
        </Controls>

        <Display width={width} height={height}>
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
  }
)
