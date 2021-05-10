import React, { memo, useContext } from 'react'
import styled, { ThemeContext, css } from 'styled-components'
import get from 'lodash/get'
import { ifProp } from 'styled-tools'
import { equals } from 'ramda'
import { space } from 'styled-system'
import {} from 'helpers'

import * as Icons from './Icons'

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const Container = styled.div`
  ${space}
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;

  ${ifProp(
    'onClick',
    css`
      -webkit-app-region: no-drag;
      cursor: pointer;
    `
  )}
`

export const Icon = memo(
  ({ name, color = 'accent.400', width, height, ...props }) => {
    const { colors } = useContext(ThemeContext)

    const Iconable = Icons[capitalize(name)]

    return (
      <Container {...props}>
        <Iconable
          {...props}
          width={width}
          height={height}
          color={get(colors, color)}
        />
      </Container>
    )
  }
)
