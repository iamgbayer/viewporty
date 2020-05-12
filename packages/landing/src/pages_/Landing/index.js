import React, { useContext, useState } from 'react'
import styled, { ThemeContext, css } from 'styled-components'
import { theme, ifProp } from 'styled-tools'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-translate'
import Link from 'next-translate/Link'

import firstWave from '../../assets/images/firstWave.svg'

import { Text, Icon, Modal, Button } from '../../components'
import { breakpoints, enterWithY } from '../../helpers'

import Head from './Head'

const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`

const Description = styled(Text)`
  max-width: 500px;

  ${ifProp(
    { center: true },
    css`
      text-align: center;
    `
  )}

  ${breakpoints.lessThan('sm')`
    text-align: center;
  `}
`

const Title = styled(Text)`
  max-width: 630px;
  font-size: ${theme('font.size.fortyFive')};

  ${breakpoints.greaterThan('sm')`
    font-size: ${theme('font.size.sixty')};
  `}

  ${breakpoints.lessThan('sm')`
    text-align: center;
  `}
`

const Header = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
  z-index: ${theme('zindex.100')};

  ${breakpoints.lessThan('sm')`
    display: flex;
    align-items: center;
    height: 100vh;
  `}
`

Header.Content = styled(motion.div)`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoints.lessThan('sm')`
    padding-top: 0;
  `}
`

const FirstWave = styled.img`
  width: 70%;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: ${theme('zindex.behind')};
`

const Content = styled.div`
  position: relative;
`

const Extends = styled.img`
  position: absolute;
  left: 0;
  bottom: 30px;
  z-index: ${theme('zindex.behind')};
  max-width: 60%;

  ${breakpoints.lessThan('md')`
    max-width: 90%;
  `}
`

Modal.Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

Modal.Title = styled(Text)`
  font-size: ${theme('font.size.thirty')};
  text-align: center;
`

const Languages = styled(motion.div)`
  display: flex;
  position: absolute;
  top: 10px;
  right: 15px;
  z-index: ${theme('zindex.overlay')};
`

const Language = styled(Text)`
  cursor: pointer;
`

const Subscribe = styled(Container)`
  padding: 80px 0;
`

Subscribe.Content = styled(Container)`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  ${breakpoints.lessThan('md')`
    flex-direction: column;
  `}
`

const Logo = styled(Icon)`
  width: max-content;
`

const Nav = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default function Landing() {
  const { colors } = useContext(ThemeContext)
  const { t } = useTranslation()
  const [config, setConfig] = useState({
    modal: false,
    status: 'right',
    size: 11
  })

  return (
    <Content>
      <Head />

      <Nav>
        <Logo onClick={() => {}} width={250} height={75} name="logo" />

        <Menu>
          <Text>Twitter</Text>
          <Text>FAQ</Text>
          <Text>Get early access</Text>
        </Menu>
      </Nav>

      <Languages variants={enterWithY(10)}>
        <Link href="/" lang="en" key="en">
          <Language color={colors.primary}>EN</Language>
        </Link>

        <Link href="/" lang="pt-BR" key="pt-BR">
          <Language color={colors.primary} left={15}>
            pt-BR
          </Language>
        </Link>
      </Languages>

      <Header>
        <Container>
          <Header.Content
            exit="exit"
            initial="initial"
            animate="enter"
            variants={{
              initial: { y: -200 },
              enter: { transition: { staggerChildren: 0.4 } }
            }}
          >
            <motion.div variants={enterWithY(200)}>
              <Title color={colors.primary} weight="bold">
                The browser for developers
              </Title>
            </motion.div>

            <motion.div variants={enterWithY(200)}>
              <Description
                color={colors.support.quartiary}
                size="eighteen"
                weight="light"
                height={22}
                top={30}
                bottom={40}
              >
                Spend half the time designing and developing responsive websites
                by testing them on multiple screens at once.
              </Description>
            </motion.div>

            <motion.div variants={enterWithY(200)}>
              <Button variant="secondary">Get early access</Button>
            </motion.div>
          </Header.Content>
        </Container>

        <FirstWave src={firstWave} />
      </Header>
    </Content>
  )
}
