import React, { useContext, useState, useEffect } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { theme } from 'styled-tools'
import { not, equals, isNil, findIndex, subtract, indexOf } from 'ramda'
import { useStoreActions, useStoreState } from 'easy-peasy'

import { Icon, WindowControl } from '@/components'
import { emit, EVENTS } from '@/emitter'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${theme('colors.two')};
`

const Bar = styled.div`
  // -webkit-app-region: drag;
  position: fixed;
  width: 100%;
  height: 36px;
  background-color: ${theme('colors.one')};
  display: flex;
  align-items: center;
`

const Controls = styled.div`
  display: flex;
`

const Address = styled.input`
  -webkit-app-region: no-drag;
  max-width: 450px;
  width: 100%;
  height: 22px;
  border: none;
  padding: 0 10px;
  background-color: ${theme('colors.six')};
  border-radius: ${theme('border.radius.four')};
  color: ${theme('colors.five')};
  font-family: ${theme('font.family.one')};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${theme('colors.five')};
  }
`

const Navigation = styled.div`
  width: 100%;
  display: flex;
`

export const Header = ({ children }) => {
  const { colors } = useContext(ThemeContext)
  const { url, urls } = useStoreState(({ history }) => history)
  const { setUrl } = useStoreActions(({ history }) => history)
  const [local, setLocal] = useState(url)

  const navigate = ({ key }) => {
    if (not(equals(key, 'Enter'))) {
      return
    }

    const hasProtocol = ['http', 'https'].find((protocol) =>
      local.includes(protocol)
    )

    setUrl(isNil(hasProtocol) ? `http://${local}` : local)
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
            <Icon
              name="right"
              width={15}
              height={15}
              color={colors.five}
              left={15}
              right={15}
              onClick={() => getPreviousUrl() && setUrl(getPreviousUrl())}
            />

            <Icon
              name="left"
              width={15}
              height={15}
              color={colors.five}
              right={15}
              onClick={() => getNextUrl() && setUrl(getNextUrl())}
            />

            <Icon
              name="reload"
              width={17}
              height={17}
              color={colors.five}
              onClick={() => emit(EVENTS.reload, url)}
              right={15}
            />
          </Controls>

          <Address
            placeholder="Type an URL"
            onKeyPress={navigate}
            value={local}
            onChange={({ target }) => setLocal(target.value)}
          />
        </Navigation>

        <WindowControl />
      </Bar>

      <>{children}</>
    </Container>
  )
}