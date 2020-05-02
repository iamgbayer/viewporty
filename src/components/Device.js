import React, { useRef, useEffect, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { prop, theme } from 'styled-tools'
import { isNil } from 'ramda'

import { Text } from './Text'

const { remote } = window.require('electron')

const scrollbar = `
  ::-webkit-scrollbar {
    background: transparent;
    width: 5px;
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
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
`

const Container = styled.div`
  display: inline-block;
  margin-right: 35px;
  margin-bottom: 35px;
  min-width: ${prop('width')}px;

  ${scrollbar}
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

export const Device = ({ name, url, width, height, userAgent, zoom }) => {
  const ref = useRef()
  const { colors } = useContext(ThemeContext)

  useEffect(() => {
    const webview = ref.current

    if (isNil(webview)) {
      return
    }

    webview.addEventListener('dom-ready', () => {
      const { webContents } = webview.getWebContents()
      // webview.openDevTools()

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
}
