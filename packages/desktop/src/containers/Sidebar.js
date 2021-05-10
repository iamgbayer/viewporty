import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { theme, ifProp } from 'styled-tools'
import { space } from 'styled-system'

import { Icon, Text } from '@viewporty/components'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { not, prop } from 'ramda'

import { Group } from 'components'

const Container = styled.div`
  display: flex;
`

const Content = styled.div`
  width: 100%;
`

const Bar = styled.div`
  width: 100%;
  max-width: ${ifProp({ isCollapsed: true }, 40, 190)}px;
  background-color: ${theme('colors.accent.100')};
  padding: ${ifProp({ isCollapsed: true }, '20px 5px', '20px 15px')};
`

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme('colors.accent.600')};
  margin-bottom: 10px;
`

const Option = ({
  icon,
  description,
  isCollapsed,
  onClick,
  width = 20,
  height = 20
}) => {
  const { colors } = useContext(ThemeContext)

  return (
    <Option.Container
      isCollapsed={isCollapsed}
      onClick={onClick}
      marginBottom={15}
    >
      <Icon name={icon} width={width} height={height} color="accent.400" />

      {not(isCollapsed) && (
        <Text marginLeft="5px" color="accent.400" fontSize={15}>
          {description}
        </Text>
      )}
    </Option.Container>
  )
}

Option.Container = styled.div`
  ${space}
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: ${ifProp({ isCollapsed: true }, 'center', 'flex-start')};
`

const Subtitle = styled(Text)`
  text-transform: uppercase;
  font-size: ${theme('font.size.fourteen')};
  color: ${theme('colors.accent.400')};
  font-weight: ${theme('font.weight.medium')};
`

export const Sidebar = ({ children }) => {
  const { isMenuCollapsed } = useStoreState(prop('config'))

  const { toggleOrientation, setScale, setAlign } = useStoreActions(
    ({ config, devices }) => ({
      toggleOrientation: devices.toggleOrientation,
      setScale: config.setScale,
      setAlign: config.setAlign
    })
  )

  return (
    <Container>
      <Bar isCollapsed={isMenuCollapsed}>
        <Subtitle marginBottom={10}>Alignment</Subtitle>

        <Group
          marginBottom={15}
          hasActiveId="wrap"
          orientation={isMenuCollapsed ? 'vertical' : 'horizontal'}
        >
          <Group.Option id="nowrap" onClick={() => setAlign('nowrap')}>
            Nowrap
          </Group.Option>
          <Group.Option id="wrap" onClick={() => setAlign('wrap')}>
            Wrap
          </Group.Option>
        </Group>

        <Separator />

        <Subtitle marginBottom={10}>Orientation</Subtitle>

        <Group marginBottom={15} hasActiveId="wrap">
          <Group.Option
            id="nowrap"
            onClick={() => toggleOrientation('portrait')}
          >
            Portrait
          </Group.Option>
          <Group.Option
            id="wrap"
            onClick={() => toggleOrientation('landscape')}
          >
            Landscape
          </Group.Option>
        </Group>

        <Separator />

        <Subtitle marginBottom={10}>Zoom</Subtitle>

        <Group
          hasActiveId="75"
          orientation={isMenuCollapsed ? 'vertical' : 'horizontal'}
        >
          <Group.Option id="25" onClick={() => setScale(25)}>
            25%
          </Group.Option>
          <Group.Option id="50" onClick={() => setScale(50)}>
            50%
          </Group.Option>
          <Group.Option id="75" onClick={() => setScale(75)}>
            75%
          </Group.Option>
          <Group.Option id="100" onClick={() => setScale(100)}>
            100%
          </Group.Option>
        </Group>
      </Bar>

      <Content>{children}</Content>
    </Container>
  )
}
