import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { theme } from 'styled-tools'

import { Icon, Text } from '@responsivy/components'
import { useStoreActions } from 'easy-peasy'

const Container = styled.div`
  display: flex;
`

const Content = styled.div`
  width: 100%;
`

const Bar = styled.div`
  min-width: 190px;
  background-color: ${theme('colors.one')};
  padding: 20px 15px;
`

const Title = styled(Text)``

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme('colors.six')};
  margin-bottom: 15px;
`

const Option = ({ icon, description, onClick, width = 20, height = 20 }) => {
  const { colors } = useContext(ThemeContext)

  return (
    <Option.Container onClick={onClick}>
      <Icon
        name={icon}
        width={width}
        height={height}
        color={colors.five}
        right={5}
      />

      <Text color={colors.five}>{description}</Text>
    </Option.Container>
  )
}

Option.Container = styled.div`
  display: flex;
  cursor: pointer;
  margin-bottom: 15px;
`

export const Sidebar = ({ children }) => {
  const { setModal, toggleOrientation } = useStoreActions(
    ({ config, devices }) => ({
      toggleOrientation: devices.toggleOrientation,
      setModal: config.setModal
    })
  )

  return (
    <Container>
      <Bar>
        <Option
          onClick={() => toggleOrientation('portrait')}
          icon="phone"
          description="Rotate portrait"
        />
        <Option
          onClick={() => toggleOrientation('landscape')}
          icon="portrait"
          description="Rotate landscape"
        />

        <Separator />

        <Option
          onClick={() => setModal('ORGANIZE_DEVICES')}
          icon="layers"
          width={19}
          height={19}
          description="Organize devices"
        />
      </Bar>

      <Content>{children}</Content>
    </Container>
  )
}
