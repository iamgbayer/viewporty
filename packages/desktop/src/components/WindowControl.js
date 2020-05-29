import React from 'react'
import styled, { css } from 'styled-components'
import { theme, switchProp } from 'styled-tools'
import { equals, or } from 'ramda'

import { Icon } from '@viewporty/components'

const { remote } = window.require('electron')
const os = window.require('os')

const Container = styled.div`
  width: 235px;
  height: 36px;
  align-items: center;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;

  ${switchProp('platform', {
    windows: css`
      right: 120px;
    `,
    linux: css`
      right: 55px;
    `,
    darwin: css`
      left: -180px;
    `
  })}
`

const WindowsControl = styled.div`
  -webkit-app-region: no-drag;
  width: 55px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${theme('colors.six')};
  }
`

const CircleControl = styled.div`
  width: 30px;
  height: 100%;
  -webkit-app-region: no-drag;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: ${theme('border.radius.fifty')};
  background-color: ${theme('colors.five')};
  cursor: pointer;
`

const Windows = ({ onMinimize, onMaximize, onClose }) => (
  <>
    <WindowsControl onClick={onMinimize}>
      <Icon width={22} height={22} name="minimize" />
    </WindowsControl>

    <WindowsControl onClick={onMaximize}>
      <Icon width={15} height={15} name="maximize" />
    </WindowsControl>

    <WindowsControl onClick={onClose}>
      <Icon width={30} height={30} name="close" />
    </WindowsControl>
  </>
)

const Linux = ({ onMinimize, onMaximize, onClose }) => (
  <>
    <CircleControl>
      <Circle onClick={onMinimize} />
    </CircleControl>

    <CircleControl>
      <Circle onClick={onMaximize} />
    </CircleControl>

    <CircleControl>
      <Circle onClick={onClose} />
    </CircleControl>
  </>
)

const OSX = ({ onMinimize, onMaximize, onClose }) => <></>

export const WindowControl = () => {
  const onMinimize = () => remote.getCurrentWindow().minimize()

  const onMaximize = () => {
    const window = remote.getCurrentWindow()

    window.isMaximized() ? window.unmaximize() : window.maximize()
  }

  const onClose = () => remote.app.quit()

  const mapping = {
    windows: Windows,
    linux: Linux,
    darwin: OSX
  }

  const getPlatform = () => {
    const platform = os.platform()

    return or(equals(platform, 'win64'), equals(platform, 'win32'))
      ? 'windows'
      : platform
  }

  const WindowByPlatform = mapping[getPlatform()] ?? Linux

  return (
    <Container platform={getPlatform()}>
      <WindowByPlatform
        onMaximize={onMaximize}
        onMinimize={onMinimize}
        onClose={onClose}
      />
    </Container>
  )
}
