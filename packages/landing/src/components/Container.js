import styled from 'styled-components'
import { motion } from 'framer-motion'
import media from 'styled-media-query'

export const variants = {
  initial: {
    opacity: 0,
    x: '100%'
  },
  in: {
    opacity: 1,
    x: '0%',
    transition: {
      type: 'tween',
      ease: 'anticipate',
      delay: 0.6
    }
  },
  out: {
    opacity: 0,
    x: '-100%',
    transition: {
      type: 'tween',
      ease: 'anticipate',
      duration: 0.5
    }
  }
}

export const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.lessThan('large')`
    padding: 0 15px;
  `}
`
