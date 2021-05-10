import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { theme } from 'styled-tools'
import PropTypes from 'prop-types'
import media from 'styled-media-query'

import { Closeable } from './Closeable'
import { Icon } from './Icon'

const Overlay = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${theme('colors.accent.500')};
  position: fixed;
  z-index: ${theme('zindex.overlay')};
  overflow: hidden;
`

const Content = styled.div`
  width: 100%;
  max-width: 550px;
  background-color: ${theme('colors.accent.100')};
  border-radius: ${theme('border.radius.four')};
  box-shadow: ${theme('shadow.one')};
  padding: 35px 25px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  ${media.lessThan('medium')`
    width: calc(100% - 30px);
  `}
`

const Close = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 10px;
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
  const { colors } = useContext(ThemeContext)

  return (
    <>
      {isOpen && (
        <Overlay
          initial="out"
          animate={isOpen ? 'in' : 'out'}
          exit="out"
          variants={variants}
        >
          <Closeable whenClose={close}>
            <Content>
              <Close
                name="close"
                width={35}
                height={35}
                onClick={close}
                color="accent.400"
              />

              {children}
            </Content>
          </Closeable>
        </Overlay>
      )}
    </>
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
