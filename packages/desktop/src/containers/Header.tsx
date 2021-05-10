import React, { useContext, useState, useEffect, useRef } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { theme } from 'styled-tools'
import { not, equals, isNil, indexOf } from 'ramda'
import { useStoreActions, useStoreState } from 'easy-peasy'

import { WindowControl } from 'components'
import { Icon, Box } from '@viewporty/components'

import { emit, EVENTS } from 'emitter'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${theme('colors.accent.200')};
`

const Bar = styled.div`
  position: fixed;
  width: 100%;
  height: 40px;
  background-color: ${theme('colors.accent.100')};
  display: flex;
  align-items: center;
`

const Controls = styled.div`
  display: flex;
`

const Control = styled(Box)`
  width: 30px;
  height: 25px;
  background-color: ${theme('colors.accent.600')};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  -webkit-app-region: no-drag;
`

const URL = styled.input`
  -webkit-app-region: no-drag;
  max-width: 450px;
  width: 100%;
  height: 25px;
  border: none;
  padding: 0 10px;
  background-color: ${theme('colors.accent.600')};
  border-radius: ${theme('border.radius.four')};
  color: ${theme('colors.accent.300')};
  font-family: ${theme('font.family.one')};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${theme('colors.accent.400')};
  }
`

const Navigation = styled.div`
  width: 100%;
  display: flex;
`

type Props = {
  children: React.ReactNode
}

export const Header = ({ children }: Props) => {
  const { colors } = useContext(ThemeContext)
  const urlRef = useRef<HTMLInputElement>(null)

  const { url, urls } = useStoreState(
    ({ history }) => ({
      url: history.url,
      urls: history.urls
    }),
    equals
  )
  const { setUrl, setModal, toggleDevtoolsVisibility } = useStoreActions(
    ({ history, config }) => ({
      setUrl: history.setUrl,
      setModal: config.setModal,
      toggleDevtoolsVisibility: config.toggleDevtoolsVisibility
    })
  )

  const [local, setLocal] = useState(url)

  const navigate = ({ key }) => {
    if (not(equals(key, 'Enter'))) {
      return
    }

    if (not(local)) {
      setUrl('')
      return
    }

    const hasProtocol = ['http', 'https'].find((protocol) =>
      local.includes(protocol)
    )

    setUrl(isNil(hasProtocol) ? `https://${local}` : local)
  }

  useEffect(() => {
    not(equals(url, local)) && setLocal(url)
  }, [url])

  const getPreviousUrl = () => urls[indexOf(url, urls) - 1]
  const getNextUrl = () => urls[indexOf(url, urls) + 1]

  return (
    <Container>
      <Bar>
        <Navigation>
          <Controls>
            <Control
              onClick={() => getPreviousUrl() && setUrl(getPreviousUrl())}
              marginLeft={15}
              marginRight="5px"
            >
              <Icon name="right" width={11} height={11} color="accent.400" />
            </Control>

            <Control
              onClick={() => getNextUrl() && setUrl(getNextUrl())}
              marginRight={15}
            >
              <Icon name="left" width={11} height={11} color="accent.400" />
            </Control>

            <Control onClick={() => emit(EVENTS.reload, url)} marginRight={15}>
              <Icon name="reload" width={12} height={12} color="accent.400" />
            </Control>
          </Controls>

          <URL
            ref={urlRef}
            data-testid="header-url"
            placeholder="Type an URL"
            onClick={() => urlRef.current.select()}
            onKeyPress={navigate}
            value={local}
            onChange={({ target }) => setLocal(target.value)}
          />

          <Controls>
            <Control
              onClick={() => setModal('ORGANIZE_DEVICES')}
              marginRight="5px"
              marginLeft={20}
            >
              <Icon name="layers" width={12} height={12} color="accent.400" />
            </Control>

            <Control onClick={() => toggleDevtoolsVisibility()}>
              <Icon name="devtools" width={12} height={12} color="accent.400" />
            </Control>
          </Controls>
        </Navigation>

        <WindowControl />
      </Bar>

      <>{children}</>
    </Container>
  )
}
