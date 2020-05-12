import React, { useRef, useEffect, useContext, memo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { prop, theme } from 'styled-tools'
import { isNil, not, equals } from 'ramda'
import { useStoreActions } from 'easy-peasy'

import { Text } from './Text'
import { on, EVENTS } from '@/emitter'

const { remote } = window.require('electron')

const Container = styled.div`
  float: left;
  display: inline-block;
  margin-right: 35px;
  margin-bottom: 35px;
  width: ${prop('width')}px;
`

const Display = styled.div`
  box-shadow: ${theme('shadow.one')};

  & > webview {
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

export const Device = memo(({ url, name, width, height, userAgent, zoom }) => {
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

      on(EVENTS.reload, (url) => webview.loadURL(url))

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

      // webview.addEventListener('did-navigate', console.log)
      // webview.insertCSS(scrollbar)
      // webview.addEventListener('ipc-message', ({ args }) => {
      //   const [config] = args
      //   // console.log(webContents.getAllWebContents())
      //   webview.send('toScroll', config)
      // })
    })
  }, [])

  return (
    <Container width={width}>
      <Controls>
        <Text color={colors.three}>{name}</Text>
        <Text color={colors.five} size="thirteen">
          ({width} x {height}) <Zoom>{zoom}%</Zoom>
        </Text>
      </Controls>

      <Display height={height}>
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
