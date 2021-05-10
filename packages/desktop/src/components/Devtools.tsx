import React, { useEffect, memo, useRef, useState } from 'react'
import { Resizable } from 're-resizable'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import { WebContents } from 'electron'

import { Icon } from '@viewporty/components'
import { useStoreState } from 'easy-peasy'
import { equals, head, isNil, merge, not, path, prop } from 'ramda'

const { remote, ipcRenderer } = window.require('electron')

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme('colors.accent.100')};
  border-left: 28px solid ${theme('colors.accent.500')};
`

const style: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  right: 0
}

export const Devtools = memo(() => {
  const devices = useStoreState(path(['devices', 'data']), equals)
  const ref = useRef(null)

  useEffect(() => {
    if (isNil(ref.current)) {
      return
    }

    const devicesContainsWebviewId = devices.filter((device) =>
      not(isNil(prop('webviewId', device)))
    )

    const { width, x, y } = ref.current.resizable.getBoundingClientRect()

    ipcRenderer.send(
      'whenDevtoolsOpened',
      merge(head(devicesContainsWebviewId), {
        width,
        height: window.innerHeight,
        x,
        y: 40
      })
    )
  }, [])

  const setDevtoolsBounds = (data) =>
    ipcRenderer.send('whenDevtoolsResized', data)

  return (
    <Resizable
      ref={ref}
      handleWrapperStyle={{ width: 30 }}
      style={style}
      lockAspectRatioExtraHeight={window.innerHeight}
      onResize={({ x }, direction, elementRef) =>
        setDevtoolsBounds({
          x,
          y: 40,
          width: elementRef.clientWidth,
          height: window.innerHeight
        })
      }
      defaultSize={{
        width: 320,
        height: window.innerHeight
      }}
    >
      <Container>
        <Icon
          name="inspector"
          color="accent.400"
          width={15}
          height={15}
          onClick={() => {
            const allWebContents: WebContents[] = remote.webContents.getAllWebContents()

            allWebContents.forEach((webContent) => {
              webContent.send('toInspect', true)
            })
          }}
        />
      </Container>
    </Resizable>
  )
})
