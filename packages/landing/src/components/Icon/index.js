import React, { memo, useContext } from 'react'
import styled, { ThemeContext, css } from 'styled-components'
import { ifProp } from 'styled-tools'

import { Box } from '../Box'

import * as Icons from './Icons'

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  ${ifProp(
    'onClick',
    css`
      cursor: pointer;
    `
  )}
`

export const Icon = memo(
  ({ name, color, width = 20, height = 20, ...props }) => {
    const { colors } = useContext(ThemeContext)

    const Iconable = Icons[capitalize(name)]

    return (
      <Container {...props}>
        <Iconable
          {...props}
          width={width}
          height={height}
          color={color || colors.primary}
        />
      </Container>
    )
  }
)
