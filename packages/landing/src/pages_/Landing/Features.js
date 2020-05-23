import React, { useContext } from 'react'
import styled, { ThemeContext, css } from 'styled-components'
import { theme, ifProp } from 'styled-tools'
import media from 'styled-media-query'
import { motion } from 'framer-motion'

import { Text, Button } from '@responsivy/components'

import secondWave from '@/assets/images/secondWave.svg'
import { Animation, Hidden } from '@/components'

const Container = styled.div`
  width: 100%;
  position: relative;
  padding: 110px 0;
`
const SecondWave = styled.img`
  width: calc(70% - 5px);
  position: absolute;
  right: 0;
  top: 0;
  z-index: ${theme('zindex.behind')};
`

const Title = styled(Text)`
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

const Cards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
      <>{justifyLeft && <Hidden lessThan="large">{animation}</Hidden>}</>

      <Card.Content justifyLeft={justifyLeft}>
        <Text fontSize={6} fontWeight={3} marginBottom={[10, 30]}>
          {title}
        </Text>

        <Text
          fontWeight={300}
          color={colors.eight}
          fontSize={3}
          lineHeight="25px"
        >
          {description}
        </Text>
      </Card.Content>

      <>{!justifyLeft && <Hidden lessThan="large">{animation}</Hidden>}</>
    </Card.Container>
  )
}

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

  ${ifProp(
    { justifyLeft: true },
    css`
      padding-left: 50px;
    `,
    css`
      padding-right: 30px;
    `
  )}

  ${media.lessThan('small')`
    text-align: center;
    max-width: 100%;
    padding: 0;
  `}
`

const Description = styled(Text)`
  max-width: 600px;
`

export default function Features({ onClick }) {
  return (
    <>
      <Container>
        <Content>
          <Title fontSize={7} fontWeight={3} marginBottom={60}>
            What we have
          </Title>

          <Cards>
            <Card
              animation={<Animation width={450} type="organize" />}
              width={50}
              title="Organize your screens"
              description="Reorder, hide, and create new screens with custom dimensions, user agent, etc. Also you can resize them."
            />

            <Card
              hasMargin={true}
              justifyLeft={true}
              animation={<Animation width={360} type="sync" />}
              width={50}
              title="All actions synced"
              description="When interacting with some screen, all the actions like click, scroll, and others will be synced to the other screens."
            />
          </Cards>

          <Description fontSize={5} textAlign="center" fontWeight={3}>
            And more will come with your help. Now, don't waste time and get the
            free early access!
          </Description>

          <Button variant="secondary" marginTop={20} onClick={onClick}>
            Get early access
          </Button>
        </Content>

        <SecondWave src={secondWave} />
      </Container>
    </>
  )
}
