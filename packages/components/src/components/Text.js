import styled, { css } from 'styled-components'
import { ifNotProp, theme } from 'styled-tools'
import {
  fontSize,
  fontWeight,
  color,
  lineHeight,
  textAlign,
  space
} from 'styled-system'

export const Text = styled.span`
  font-family: ${theme('font.family.one')};
  display: flex;
  ${fontSize}
  ${fontWeight}
  ${color}
  ${lineHeight}
  ${textAlign}
  ${space}

  ${ifNotProp(
    'color',
    css`
      color: ${theme('colors.three')};
    `
  )}
`
