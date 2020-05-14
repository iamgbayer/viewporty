import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { theme, ifProp } from 'styled-tools'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-translate'
import Link from 'next-translate/Link'
import media from 'styled-media-query'
import { lte } from 'ramda'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import firstWave from '@/assets/images/firstWave.svg'
import printscreen from '@/assets/images/printscreen.png'

import { Icon, Button, Text, Modal, Input } from '@responsivy/components'
import { enterWithY } from '@/helpers'

import Head from './Head'
import Features from './Features'
import Faq from './Faq'

const Container = styled.div`
  max-width: 960px;
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
  `};
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
  padding-top: 20px;

  ${media.lessThan('medium')`
    padding-top: 40px;
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
      font-size: ${theme('font.size.nineteen')}
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

const Printscreen = styled.img`
  border-radius: ${theme('border.radius.two')};
  box-shadow: ${theme('shadow.two')};
  margin-top: 150px;
  max-width: 1080px;
  width: 100%;
`

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid format').required('Required'),
  password: Yup.string().min(8, 'Minimum 8 characters').required('Required')
})

const initialValues = {
  name: '',
  email: '',
  password: ''
}

export default function Landing() {
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(true)
  const [modal, setModal] = useState(false)
  const { t } = useTranslation()

  const { handleChange, values, isValid, errors, validateForm } = useFormik({
    initialValues,
    isInitialValid: validationSchema.isValidSync(initialValues),
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema
  })

  const { name, email, password } = values

  const signup = () => {
    validateForm()
  }

  useEffect(() => {
    setIsMobile(lte(window.innerWidth, 768))
  }, [])

  useEffect(() => {
    isMobile && setMenuOpen(false)
  }, [isMobile])

  return (
    <>
      <Modal isOpen={modal} close={() => setModal(false)}>
        <Input
          id="name"
          full={true}
          label="Your complete name"
          placeholder="John Doe"
          value={name}
          error={{
            has: !!errors.name,
            message: errors.name
          }}
          onChange={handleChange}
          bottom={10}
        />

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
          bottom={10}
        />

        <Input
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
          bottom={10}
        />

        <Button
          full={true}
          top={30}
          onClick={() => setModal(true)}
          variant="secondary"
        >
          Get early access
        </Button>
      </Modal>

      <Content>
        <Head />

        <Nav>
          <Logo onClick={() => {}} width={250} height={75} name="logo" />

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

              <Text className="navigable" weight="medium">
                Features
              </Text>

              <Text className="navigable" weight="medium">
                FAQ
              </Text>

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
                <Title weight="bold">
                  Creating responsive has never been easier.
                </Title>
              </motion.div>

              <motion.div variants={enterWithY(200)}>
                <Description
                  size="nineteen"
                  weight="light"
                  height={22}
                  top={30}
                  bottom={40}
                >
                  Spend half the time designing and developing responsive
                  websites by testing them on multiple screens at once.
                </Description>
              </motion.div>

              <motion.div variants={enterWithY(200)}>
                <Button onClick={() => setModal(true)} variant="secondary">
                  Get early access
                </Button>
              </motion.div>
            </Header.Content>

            <Printscreen src={printscreen} />
          </Container>

          <FirstWave src={firstWave} />
        </Header>

        <Features />

        <Faq />
      </Content>
    </>
  )
}
