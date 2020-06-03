import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { theme, ifProp } from 'styled-tools'
import { space } from 'styled-system'

import { Icon, Text } from '@viewporty/components'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { not } from 'ramda'

import { Group } from '@/components'

const Container = styled.div`
  display: flex;
`

const Content = styled.div`
  width: 100%;
`

const Bar = styled.div`
  width: 100%;
  max-width: ${ifProp({ isCollapsed: true }, 40, 190)}px;
  background-color: ${theme('colors.one')};
  padding: ${ifProp({ isCollapsed: true }, '20px 5px', '20px 15px')};
`

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme('colors.six')};
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
      <Icon name={icon} width={width} height={height} color={colors.five} />

      {not(isCollapsed) && (
        <Text marginLeft="5px" color={colors.five}>
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
  color: ${theme('colors.five')};
  font-weight: ${theme('font.weight.medium')};
`

export const Sidebar = ({ children }) => {
  const { isMenuCollapsed } = useStoreState(({ config }) => config)

  const {
    setModal,
    toggleOrientation,
    setScale,
    setMenuCollapsed,
    setAlign,
    toggleDevtoolsVisibility
  } = useStoreActions(({ config, devices }) => ({
    toggleOrientation: devices.toggleOrientation,
    setModal: config.setModal,
    setScale: config.setScale,
    setAlign: config.setAlign,
    setMenuCollapsed: config.setMenuCollapsed,
    toggleDevtoolsVisibility: config.toggleDevtoolsVisibility
  }))

  return (
    <Container>
      <Bar isCollapsed={isMenuCollapsed}>
        {/* <div onClick={() => setMenuCollapsed(!isMenuCollapsed)}>collapse</div> */}

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

        <Option
          isCollapsed={isMenuCollapsed}
          onClick={() => toggleOrientation('portrait')}
          icon="phone"
          description="Rotate portrait"
        />
        <Option
          isCollapsed={isMenuCollapsed}
          onClick={() => toggleOrientation('landscape')}
          icon="portrait"
          description="Rotate landscape"
        />

        <Option
          isCollapsed={isMenuCollapsed}
          onClick={() => setModal('ORGANIZE_DEVICES')}
          icon="layers"
          width={19}
          height={19}
          description="Organize screens"
        />

        <Option
          isCollapsed={isMenuCollapsed}
          onClick={() => toggleDevtoolsVisibility()}
          icon="devtools"
          width={19}
          height={19}
          description="Devtools"
        />

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
