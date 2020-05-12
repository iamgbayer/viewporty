import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { Icon } from '@/components'
import { theme } from 'styled-tools'

const { remote } = window.require('electron')

const Container = styled.div`
  width: 235px;
  height: 36px;
  align-items: center;
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 120px;
  top: 0;
`

const Control = styled.div`
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

export const WindowControl = () => {
  const { colors } = useContext(ThemeContext)

  const onMinimize = () => remote.getCurrentWindow().minimize()

  const onMaximize = () => {
    const window = remote.getCurrentWindow()

    window.isMaximized() ? window.unmaximize() : window.maximize()
  }

  const onClose = () => remote.app.quit()

  return (
    <Container>
      <Control onClick={onMinimize}>
        <Icon width={22} height={22} color={colors.three} name="minimize" />
      </Control>

      <Control onClick={onMaximize}>
        <Icon width={15} height={15} color={colors.three} name="maximize" />
      </Control>

      <Control onClick={onClose}>
        <Icon width={30} height={30} color={colors.three} name="close" />
      </Control>
    </Container>
  )
}
