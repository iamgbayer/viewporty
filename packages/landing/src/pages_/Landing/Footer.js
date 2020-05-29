import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { theme } from 'styled-tools'

import { Text, Icon } from '@viewporty/components'
import media from 'styled-media-query'

const Content = styled.div`
  width: 100%;
  background-color: ${theme('colors.four')};
  padding: 30px 0;
`

const Socials = styled.div`
  flex-direction: column;
  display: flex;

  ${media.lessThan('small')`
    align-items: center;
  `}
`

const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan('large')`
    padding: 0 15px;
  `}

  ${media.lessThan('small')`
    flex-direction: column;
  `}
`

const Social = styled(Text)`
  cursor: pointer;
`

export default function Footer() {
  const { colors } = useContext(ThemeContext)

  const open = (username) => () => {
    const getBySocial = {
      viewporty: 'https://twitter.com/viewporty',
      iamgbayer: 'https://twitter.com/iamgbayer'
    }

    window.open(getBySocial[username])
  }

  return (
    <Content>
      <Container>
        <Text color={colors.one}>We want to hear you!</Text>

        <Socials>
          <Text color={colors.one} fontWeight={3} marginTop={[20, 0]}>
            Contact and follow us
          </Text>

          <Social
            onClick={open('viewporty')}
            color={colors.one}
            marginTop={10}
            fontWeight={0}
          >
            @viewporty
          </Social>

          <Social
            onClick={open('iamgbayer')}
            fontWeight={0}
            color={colors.one}
            marginTop={10}
          >
            @iamgbayer
          </Social>
        </Socials>
      </Container>
    </Content>
  )
}
