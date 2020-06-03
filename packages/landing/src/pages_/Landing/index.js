import React, { useState, useEffect, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { scroller, Element } from 'react-scroll'

import { theme, ifProp } from 'styled-tools'
import { motion } from 'framer-motion'
import media from 'styled-media-query'
import { lte } from 'ramda'

import firstWave from '@/assets/images/firstWave.svg'
import thirdWave from '@/assets/images/thirdWave.svg'
import video from '@/assets/images/video.gif'

import { Icon, Button, Text } from '@viewporty/components'
import { enterWithY } from '@/helpers'

import Head from './Head'
import Features from './Features'
import Footer from './Footer'
import OpenSource from './OpenSource'

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: ${theme('zindex.one')};

  ${media.lessThan('large')`
    padding: 0 15px;
    padding-top: 20px;
  `};
`

const Description = styled(Text)`
  max-width: 500px;
`

const Title = styled(Text)`
  max-width: 630px;
`

const Header = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  z-index: ${theme('zindex.100')};

  ${media.lessThan('small')`
    display: flex;
    align-items: center;
  `}
`

Header.Content = styled(motion.div)`
  max-width: 960px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`

const FirstWave = styled.img`
  width: 70%;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: ${theme('zindex.behind')};
`

const ThirdWave = styled.img`
  position: absolute;
  left: 0;
  bottom: 130px;
  z-index: ${theme('zindex.behind')};
  max-width: 60%;

  ${media.lessThan('medium')`
    max-width: 90%;
  `}
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
  max-width: 960px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: ${theme('zindex.two')};

  .navigable {
    margin-left: 15px;
  }

  a {
    color: ${theme('colors.three')};
  }

  ${media.lessThan('medium')`
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
      font-size: ${theme('font.size.eighteen')}
    }
  `}
`

const Hamburguer = styled(Icon)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: ${theme('zindex.overlaid')};

  ${media.lessThan('medium')`
    path {
      stroke: ${ifProp({ isMenuOpen: true }, theme('colors.one'))};
    }
  `};
`

const Video = styled.img`
  border-radius: ${theme('border.radius.four')};
  box-shadow: ${theme('shadow.two')};
  margin-top: 150px;
  max-width: 1080px;
  width: 100%;
  display: flex;
  overflow: hidden;
`

const Clickable = styled(Text)`
  cursor: pointer;
`

export default function Landing() {
  const { colors } = useContext(ThemeContext)
  const [isMobile, setIsMobile] = useState(true)
  const [isMenuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setIsMobile(lte(window.innerWidth, 768))
  }, [])

  useEffect(() => {
    isMobile ? setMenuOpen(false) : setMenuOpen(true)
  }, [isMobile])

  return (
    <>
      <Content>
        <Head />

        <Nav>
          <Logo
            onClick={() => {}}
            width={[160, 250]}
            height={[50, 75]}
            name="logo"
          />

          {isMobile && (
            <Hamburguer
              name="menu"
              width={30}
              height={30}
              isMenuOpen={isMenuOpen}
              onClick={() => setMenuOpen(!isMenuOpen)}
            />
          )}

          {isMenuOpen && (
            <Menu>
              <Text className="navigable" weight="medium">
                <a href="https://twitter.com/viewporty" target="_blank">
                  Twitter
                </a>
              </Text>

              <Clickable
                onClick={() =>
                  scroller.scrollTo('features', {
                    duration: 1100,
                    delay: 0,
                    smooth: 'easeInOutQuart'
                  })
                }
                className="navigable"
                weight="medium"
              >
                Features
              </Clickable>

              <Text
                onClick={() =>
                  scroller.scrollTo('opensource', {
                    duration: 1100,
                    delay: 0,
                    smooth: 'easeInOutQuart'
                  })
                }
                className="navigable"
                weight="medium"
              >
                It's open source!
              </Text>
            </Menu>
          )}
        </Nav>

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
                <Title fontSize={[5, 7]} fontWeight={3}>
                  Making and testing responsive design has never been easier.
                </Title>
              </motion.div>

              <motion.div variants={enterWithY(200)}>
                <Description
                  fontSize={3}
                  fontWeight={300}
                  color={colors.eight}
                  lineHeight="22px"
                  marginTop={30}
                  marginBottom={40}
                >
                  Improve your productivity when making and testing responsive
                  designs with Viewporty, a desktop tool that let you view
                  multiple customisable screens sizes at once.
                </Description>
              </motion.div>

              <motion.div variants={enterWithY(200)}>
                <Button variant="secondary">Download soon</Button>
              </motion.div>
            </Header.Content>

            <Video src={video} />
          </Container>

          <FirstWave src={firstWave} />
        </Header>

        <Element name="features">
          <Features />
        </Element>

        <Element name="opensource">
          <OpenSource />
        </Element>

        <ThirdWave src={thirdWave} />

        <Footer />
      </Content>
    </>
  )
}
