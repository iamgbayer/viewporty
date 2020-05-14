import React from 'react'
import styled, { css } from 'styled-components'
import { theme, prop, ifProp } from 'styled-tools'

import { Tokens } from './Tokens'
import { Box } from './Box'

const { font } = Tokens

const Texteable = styled.span`
  font-family: ${theme('font.family.one')};
  font-weight: ${prop('weight')};
  font-size: ${prop('size')};
  color: ${ifProp('color', prop('color'), theme('colors.three'))};

  ${ifProp(
    'height',
    css`
      line-height: ${prop('height')}px;
    `
  )};
  ${ifProp(
    { align: 'center' },
    css`
      text-align: center;
    `
  )}
`

export function Text({
  weight = 'regular',
  size = 'fifteen',
  color,
  children,
  height,
  ...props
}) {
  return (
    <Box {...props}>
      <Texteable
        {...props}
        height={height}
        color={color}
        size={font.size[size]}
        weight={font.weight[weight]}
      >
        {children}
      </Texteable>
    </Box>
  )
}
