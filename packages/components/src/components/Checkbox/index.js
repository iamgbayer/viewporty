import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { switchProp, ifProp, prop, theme } from 'styled-tools'

import { Box as Boxeable } from '../Box'

const Box = styled(Boxeable)`
  display: flex;
`

const Content = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.span`
  border-radius: ${theme('border.radius.two')};

  background-color: ${ifProp(
    'disabled',
    prop('theme.selector.icon.disabled'),
    theme('colors.quartiary')
  )};

  ${switchProp('size', {
    default: css`
      width: 8px;
      height: 8px;
    `,
    large: css`
      width: 10px;
      height: 10px;
    `
  })};
`

const Hidden = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Styled = styled.div`
  border: 1px solid
    ${ifProp(
      'disabled',
      prop('theme.selector.border.disabled'),
      theme('colors.support.quintiary')
    )};

  background-color: ${ifProp(
    'checked',
    theme('colors.support.quintiary'),
    'transparent'
  )};

  border-radius: ${prop('theme.border.radius.five')};
  display: flex;
  justify-content: center;
  align-items: center;

  ${switchProp('size', {
    default: css`
      width: 18px;
      height: 18px;
    `,
    large: css`
      width: 22px;
      height: 22px;
    `
  })};
`

const Container = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  ${switchProp('labelAlign', {
    bottom: css`
      flex-direction: column;
    `,
    top: css`
      flex-direction: column-reverse;
    `,
    left: css`
      flex-direction: row-reverse;
    `,
    right: css`
      flex-direction: row;
    `
  })};
`

const Label = styled.span`
  font-family: ${theme('font.family.primary')};
  color: ${theme('colors.support.quintiary')};

  ${switchProp('size', {
    default: css`
      font-size: ${theme('font.size.twelve')};
    `,
    large: css`
      font-size: ${theme('font.size.fourteen')};
    `
  })};

  ${switchProp('labelAlign', {
    bottom: css`
      margin-top: 8px;
    `,
    top: css`
      margin-bottom: 8px;
    `,
    left: css`
      margin-right: 8px;
    `,
    right: css`
      margin-left: 8px;
    `
  })};
`

export const Checkbox = memo(
  ({ checked, label, onChange, id, disabled, labelAlign, size, ...props }) => {
    return (
      <Box {...props}>
        <Container htmlFor={id} labelAlign={labelAlign}>
          <Content>
            <Hidden
              id={id}
              checked={checked}
              value={checked}
              onChange={onChange}
              disabled={disabled}
              {...props}
            />

            <Styled size={size} checked={checked} disabled={disabled}>
              {(checked || disabled) && (
                <Icon size={size} disabled={disabled} />
              )}
            </Styled>
          </Content>

          <Label labelAlign={labelAlign} size={size} disabled={disabled}>
            {label}
          </Label>
        </Container>
      </Box>
    )
  }
)

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  labelAlign: 'bottom',
  onChange: () => {},
  size: 'default'
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  labelAlign: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
  size: PropTypes.oneOf(['default', 'large'])
}

Checkbox.labelAlign = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right'
}

Checkbox.size = {
  default: 'default',
  large: 'large'
}
