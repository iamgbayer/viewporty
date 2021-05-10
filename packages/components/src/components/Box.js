import styled, { css } from 'styled-components'
import {
  space,
  flexbox,
  layout,
  textAlign,
  display,
  maxWidth,
  position,
  shadow
} from 'styled-system'
import { ifNotProp } from 'styled-tools'

export const Box = styled.div`
  ${layout};
  ${display};
  ${space};
  ${flexbox};
  ${textAlign};
  ${maxWidth};
  ${position};
  ${shadow};

  ${ifNotProp(
    'display',
    css`
      display: flex;
    `
  )}
`
