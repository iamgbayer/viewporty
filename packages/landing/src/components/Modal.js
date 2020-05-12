import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { theme } from 'styled-tools'
import PropTypes from 'prop-types'
import { Closeable } from './Closeable'
import media from 'styled-media-query'

const Overlay = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${theme('colors.support.seventiary')};
  position: fixed;
  z-index: ${theme('zindex.overlay')};
  overflow: hidden;
`

const Content = styled.div`
  width: 100%;
  max-width: 550px;
  background-color: ${theme('colors.quartiary')};
  border-radius: ${theme('border.radius.five')};
  border: 1px solid ${theme('colors.support.secondary')};
  padding: 35px 25px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  ${media.lessThan('medium')`
    margin: 0 auto;
    max-width: calc(100% - 40px);
  `}
`

const variants = {
  in: {
    opacity: 1,
    display: 'block'
  },
  out: {
    opacity: 0,
    transitionEnd: {
      display: 'none'
    }
  }
}

export function Modal({ children, isOpen, close }) {
  return (
    <Overlay
      initial="out"
      animate={isOpen ? 'in' : 'out'}
      exit="out"
      variants={variants}
    >
      <Closeable whenClose={close}>
        <Content>{children}</Content>
      </Closeable>
    </Overlay>
  )
}

Modal.defaultProps = {
  isOpen: false,
  close: () => {}
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func
}
