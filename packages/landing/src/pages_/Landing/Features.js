import React, { useContext } from 'react'
import styled, { ThemeContext, css } from 'styled-components'
import { theme, ifProp } from 'styled-tools'
import media from 'styled-media-query'
import { motion } from 'framer-motion'

import { Text, Icon } from '@responsivy/components'

import secondWave from '@/assets/images/secondWave.svg'
import { Animations } from '@/components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 110px 0;
`
const SecondWave = styled.img`
  width: calc(70% - 5px);
  position: absolute;
  right: 0;
  top: 0;
  z-index: ${theme('zindex.negative')};
`

const Title = styled(Text)`
  font-size: ${theme('font.size.fortyFive')};
  text-align: center;

  ${media.greaterThan('medium')`
    font-size: ${theme('font.size.sixty')};
  `}
`

const Content = styled.div`
  max-width: 1142px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: ${theme('zindex.one')};
`

const Feature = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

Feature.Description = styled(Text)`
  line-height: 25px;
`

const Card = ({
  justifyLeft = false,
  title,
  description,
  animation,
  hasMargin = false
}) => {
  const { colors } = useContext(ThemeContext)

  return (
    <Card.Container hasMargin={hasMargin}>
      <>{justifyLeft && <>{animation}</>}</>

      <Card.Content justifyLeft={justifyLeft}>
        <Card.Title className="title" size="forty" weight="bold">
          {title}
        </Card.Title>

        <Card.Description weight="light" color={colors.eight} size="eighteen">
          {description}
        </Card.Description>
      </Card.Content>

      <>{!justifyLeft && <>{animation}</>}</>
    </Card.Container>
  )
}

Card.Title = styled(Text)`
  ${media.lessThan('lg')`
    font-size: ${theme('font.size.twenty')};
  `}
`

Card.Description = styled(Text)`
  line-height: 25px;

  ${media.lessThan('lg')`
    font-size: ${theme('font.size.twelve')};
  `}
`

Card.Container = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  ${ifProp(
    { hasMargin: true },
    css`
      margin: 130px 0;
    `
  )}
`

Card.Content = styled(motion.div)`
  width: 100%;
  max-width: 380px;

  .title {
    margin-bottom: 30px;
  }

  ${media.lessThan('lg')`
    ${ifProp(
      { justifyLeft: true },
      css`
        padding-left: 25px;
      `,
      css`
        padding-right: 20px;
      `
    )}

    .title {
      margin-bottom: 10px;
    }
  `}

  ${media.lessThan('sm')`
    text-align: center;
    max-width: 100%;
    padding: 0;
  `}
`

export default function Features() {
  return (
    <>
      <Container>
        <Content>
          <Title weight="bold" bottom={60}>
            What we have
          </Title>

          <Feature>
            <Card
              animation={<Animations />}
              width={50}
              title="Organize your devices"
              description="All devices synced Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old."
            />

            {/* <Animations />

            <Feature.Description
              size="eighteen"
              weight="light"
              color={colors.eight}
            >
              All devices synced Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old.
            </Feature.Description> */}
          </Feature>
        </Content>

        {/* <Icon name="organizeDevices" width={200} height={200} />
      <Text>All devices synced</Text> */}
        <SecondWave src={secondWave} />
      </Container>
    </>
  )
}
