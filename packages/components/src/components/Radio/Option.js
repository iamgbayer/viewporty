import React, { useContext, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ifProp, switchProp, prop, theme } from 'styled-tools'

import { Context } from './Context'

import { Box } from '../Box'

const Content = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.span`
  border-radius: ${theme('border.radius.fifty')};
  background-color: ${theme('colors.quartiary')};

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

const Hidden = styled.input.attrs({ type: 'radio' })`
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

  border-radius: ${theme('border.radius.fifty')};
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
  justify-content: center;
  flex: 1;
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

export function Option({ id, label, name, disabled, ...props }) {
  const { size, labelAlign, checkable, setCheckable } = useContext(Context)

  const setChecked = ({ target }) => {
    const newObj = Object.keys(checkable).reduce((accumulator, current) => {
      accumulator[current] = false
      return accumulator
    }, {})

    setCheckable({
      ...newObj,
      [id]: target.checked
    })
  }

  return (
    <Fragment>
      {/* eslint-disable-next-line no-prototype-builtins */}
      {checkable.hasOwnProperty(id) && (
        <Box {...props}>
          <Container size={size} htmlFor={id} labelAlign={labelAlign}>
            <Content>
              <Hidden
                id={id}
                checked={checkable[id]}
                value={checkable[id]}
                onChange={setChecked}
                name={name}
                disabled={disabled}
              />

              <Styled size={size} disabled={disabled} checked={checkable[id]}>
                {(checkable[id] || disabled) && (
                  <Icon disabled={disabled} size={size} />
                )}
              </Styled>
            </Content>

            <Label size={size} labelAlign={labelAlign}>
              {label}
            </Label>
          </Container>
        </Box>
      )}
    </Fragment>
  )
}

Option.displayName = 'Option'

Option.defaultProps = {
  checked: false,
  disabled: false
}

Option.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  containerClassName: PropTypes.string,
  radioClassName: PropTypes.string,
  disabled: PropTypes.bool
}
