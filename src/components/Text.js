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
  color: ${prop('color')};
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
