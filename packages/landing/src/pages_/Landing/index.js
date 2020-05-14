import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme, ifProp } from 'styled-tools'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-translate'
import Link from 'next-translate/Link'
import media from 'styled-media-query'

import firstWave from '@/assets/images/firstWave.svg'

import { Icon, Button, Text } from '@responsivy/components'
import { enterWithY } from '@/helpers'

import Head from './Head'
import Features from './Features'

const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  z-index: ${theme('zindex.one')};

  ${media.lessThan('large')`
    padding: 0 15px;
  `}
`

const Description = styled(Text)`
  max-width: 500px;

  ${ifProp(
    { center: true },
    css`
      text-align: center;
    `
  )}

  ${media.lessThan('small')`
    text-align: center;
  `}
`

const Title = styled(Text)`
  max-width: 630px;
  font-size: ${theme('font.size.fortyFive')};

  ${media.greaterThan('medium')`
    font-size: ${theme('font.size.sixty')};
  `}

  ${media.lessThan('small')`
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

  ${media.lessThan('small')`
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

  ${media.lessThan('small')`
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

const Logo = styled(Icon)`
  width: max-content;
`

const Nav = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  ${media.lessThan('small')`
    margin-top: 0;
  `}
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .navigable {
    margin-left: 15px;
  }

  a {
    color: ${theme('colors.three')};
  }

  ${media.lessThan('small')`
    width: 100%;
    height: 100vh;
    background-color: ${theme('colors.four')};
    position: absolute;
    left: 0;
    top: 0;
    z-index: ${theme('zindex.overlay')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .navigable {
      margin-bottom: 20px;
      margin-left: 0;
    }

    a,
    .navigable {
      color: ${theme('colors.one')};
      font-size: ${theme('font.size.nineteen')}
    }
  `}
`

const Hamburguer = styled(Icon)`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: ${theme('zindex.overlaid')};

  ${media.lessThan('small')`
    display: block;

    path {
      stroke: ${ifProp({ hasMenuOpen: true }, theme('colors.one'))};
    }
  `};
`

export default function Landing() {
  const [hasMenuOpen, setMenuOpen] = useState(true)

  const { t } = useTranslation()

  return (
    <Content>
      <Head />

      <Nav>
        <Logo onClick={() => {}} width={250} height={75} name="logo" />

        <Hamburguer
          name="menu"
          width={30}
          height={30}
          hasMenuOpen={hasMenuOpen}
          onClick={() => setMenuOpen(!hasMenuOpen)}
        />

        {hasMenuOpen && (
          <Menu>
            <Text
              onClick={() => setMenuOpen(false)}
              className="navigable"
              weight="medium"
            >
              <a href="https://twitter.com/responsivy" target="_blank">
                Twitter
              </a>
            </Text>

            <Text className="navigable" weight="medium">
              Features
            </Text>

            <Text className="navigable" weight="medium">
              FAQ
            </Text>

            <Text className="navigable" weight="medium">
              Get early access
            </Text>
          </Menu>
        )}
      </Nav>

      {/* 
      <Languages variants={enterWithY(10)}>
        <Link href="/" lang="en" key="en">
          <Language>EN</Language>
        </Link>

        <Link href="/" lang="pt-BR" key="pt-BR">
          <Language left={15}>pt-BR</Language>
        </Link>
      </Languages> */}

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
              <Title weight="bold">The browser for developers</Title>
            </motion.div>

            <motion.div variants={enterWithY(200)}>
              <Description
                size="nineteen"
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

      <Features />
    </Content>
  )
}
