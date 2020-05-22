import React, { useState, useEffect, useContext, memo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { scroller, Element } from 'react-scroll'

import { theme, ifProp } from 'styled-tools'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-translate'
import media from 'styled-media-query'
import { lte, equals, assoc } from 'ramda'
import Player from 'react-player'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { space, fontSize, fontWeight } from 'styled-system'

import firstWave from '@/assets/images/firstWave.svg'
import thirdWave from '@/assets/images/thirdWave.svg'
import video from '@/assets/images/video.mp4'

import { Icon, Button, Text, Modal, Input } from '@responsivy/components'
import { enterWithY } from '@/helpers'
import { auth } from '@/config'

import Head from './Head'
import Features from './Features'
import Faq from './Faq'

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
  bottom: 30px;
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

const Video = styled(Player)`
  border-radius: ${theme('border.radius.four')};
  box-shadow: ${theme('shadow.two')};
  margin-top: 150px;
  max-width: 1080px;
  width: 100%;
  display: flex;
  overflow: hidden;
`

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid format').required('Required'),
  password: Yup.string().min(8, 'Minimum 8 characters').required('Required')
})

const initialValues = {
  email: '',
  password: ''
}

const initialModalState = {
  isModalOpen: false,
  content: 'form'
}

const Underlined = styled.a`
  text-decoration: underline;
`

const Clickable = styled(Text)`
  cursor: pointer;
`

const EarlyAccessCreated = styled.span`
  ${space}
  ${fontSize}
  ${fontWeight}
`

export default function Landing() {
  const { colors } = useContext(ThemeContext)
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(true)
  const [modal, setModal] = useState(initialModalState)

  const { handleChange, values, isValid, errors, validateForm } = useFormik({
    initialValues,
    isInitialValid: validationSchema.isValidSync(initialValues),
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema
  })

  const { email, password } = values

  const getEarlyAccessAccount = () => {
    validateForm()

    isValid &&
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => setModal(assoc('content', 'success')))
        .catch(console.log)
  }

  useEffect(() => {
    setIsMobile(lte(window.innerWidth, 768))
  }, [])

  useEffect(() => {
    isMobile && setMenuOpen(false)
  }, [isMobile])

  const { isModalOpen, content } = modal

  return (
    <>
      <Modal isOpen={isModalOpen} close={() => setModal(initialModalState)}>
        {equals(content, 'success') && (
          <>
            <Description>
              <EarlyAccessCreated
                fontSize={[4, 5]}
                fontWeight={3}
                marginBottom={30}
              >
                Your account for early access has been successfully created,
                follow our{' '}
                <Underlined
                  href="https://twitter.com/responsivy"
                  target="_blank"
                >
                  Twitter
                </Underlined>{' '}
                to receive updates!
              </EarlyAccessCreated>
            </Description>

            <Button
              full={true}
              onClick={() => setModal(initialModalState)}
              variant="secondary"
            >
              Close
            </Button>
          </>
        )}

        {equals(content, 'form') && (
          <>
            <Input
              id="email"
              full={true}
              label="Email"
              placeholder="john@doe.com"
              onChange={handleChange}
              error={{
                has: !!errors.email,
                message: errors.email
              }}
              value={email}
              marginBottom={10}
            />

            <Input
              type="password"
              id="password"
              full={true}
              placeholder="••••••••"
              label="Password"
              error={{
                has: !!errors.password,
                message: errors.password
              }}
              onChange={handleChange}
              value={password}
              marginBottom={35}
            />

            <Button
              full={true}
              onClick={getEarlyAccessAccount}
              variant="secondary"
            >
              Get early access
            </Button>
          </>
        )}
      </Modal>

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
                <a href="https://twitter.com/responsivy" target="_blank">
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

              {/* <Text className="navigable" weight="medium">
                FAQ
              </Text> */}

              <Text className="navigable" weight="medium">
                <a href="https://trello.com/b/P7Mly36u/roadmap" target="_blank">
                  Suggest features
                </a>
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
                <Title fontSize={[5, 7]} fontWeight={3}>
                  Making and testing responsive has never been easier.
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
                  Responsivy is a desktop tool that helps you to improve your
                  productivity when making responsive by testing in multiples
                  screens sizes, based on real devices and custom sizes defined
                  by you.
                </Description>
              </motion.div>

              <motion.div variants={enterWithY(200)}>
                <Button
                  onClick={() => setModal(assoc('isModalOpen', true))}
                  variant="secondary"
                >
                  Get early access
                </Button>
              </motion.div>
            </Header.Content>

            <Video
              url={video}
              width="100%"
              height="100%"
              loop={true}
              playing={true}
              muted
            />
          </Container>

          <FirstWave src={firstWave} />
        </Header>

        <Element name="features">
          <Features />
        </Element>

        <ThirdWave src={thirdWave} />
      </Content>
    </>
  )
}
