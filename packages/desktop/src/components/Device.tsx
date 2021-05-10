import React, { useRef, useEffect, useContext, memo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { prop, theme } from 'styled-tools'
import { isNil, not, equals } from 'ramda'
import { useStoreActions } from 'easy-peasy'
import { WebviewTag, WebContents } from 'electron'

import { Text } from '@viewporty/components'
import { once, removeListener, EVENTS } from 'emitter'
import { percentage } from 'helpers'
import { DeviceProps } from 'types'

const { remote } = window.require('electron')

type DisplayProps = {
  width: number
  height: number
  scale: number
}

type ContainerProps = {
  right: number
  bottom: number
}

const Container = styled.div<ContainerProps>`
  display: inline-block;
  margin-right: calc(-${prop('right')}px + 40px);
  margin-bottom: calc(-${prop('bottom')}px + 40px);
`

const Display = styled.div<DisplayProps>`
  transform: scale(${prop('scale')});
  transform-origin: 0 0;
  width: ${prop('width')}px;
  box-shadow: ${theme('shadow.one')};

  & > webview {
    background-color: ${theme('colors.accent.800')};
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
    color: ${theme('colors.accent.300')};
  }
`

interface Props extends DeviceProps {
  url: string
}

export const Device = memo(
  ({ url, name, width, height, userAgent, scale }: Props) => {
    const ref = useRef<WebviewTag>()
    const { setUrl } = useStoreActions(prop('history'))
    const { setWebviewIdByName } = useStoreActions(prop('devices'))

    useEffect(() => {
      const webview = ref.current

      if (isNil(webview)) {
        return
      }

      webview.addEventListener('dom-ready', () => {
        const { webContents } = webview.getWebContents()

        setWebviewIdByName({ name, webviewId: webview.getWebContentsId() })

        once(EVENTS.reload, (url: string) => webContents.loadURL(url))

        webContents.enableDeviceEmulation({
          screenPosition: 'mobile'
        })

        webview.addEventListener(
          'will-navigate',
          (event) => not(equals(event.url, url)) && setUrl(event.url)
        )
      })

      return () => {
        removeListener(EVENTS.reload)
      }
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
            color="accent.300"
            fontSize={1}
            marginBottom="5px"
          >
            {name}
          </Text>
          <Text color="accent.400" fontSize={0}>
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
  }
)
