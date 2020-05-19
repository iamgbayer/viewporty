import React, { useContext } from 'react'
import styled, { ThemeContext, css } from 'styled-components'
import { ifNotProp, ifProp, switchProp, theme } from 'styled-tools'
import { space, color } from 'styled-system'

const Container = styled.button`
  ${space}
  ${color}

  ${ifNotProp(
    'color',
    css`
      color: ${theme('colors.one')};
    `
  )}

  width: ${ifProp({ full: true }, '100%', 'max-content')};
  height: ${switchProp('size', {
    default: '40px',
    large: '48px'
  })};
  background-color: ${switchProp('variant', {
    primary: theme('colors.one'),
    secondary: theme('colors.four')
  })};
  
  padding: ${switchProp('size', {
    default: '0 15px',
    large: '0 25px'
  })};
  
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme('border.radius.four')};
  position: relative;
  transition: all 0.4s ease-in-out;
  text-align: center;
  font-size: ${theme('font.size.eleven')};
  font-family: ${theme('font.family.one')};
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: ${switchProp('variant', {
      primary: theme('colors.support.quartiary'),
      secondary: theme('colors.nine')
    })};
  }
`

const Icon = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`

export const Button = ({
  size,
  full,
  variant,
  children,
  icon,
  onClick,
  href,
  ...props
}) => {
  const { colors } = useContext(ThemeContext)

  const on = () => (href ? window.open(href, '_blank') : onClick && onClick())

  return (
    <Container
      {...props}
      onClick={on}
      size={size}
      icon={icon}
      full={full}
      variant={variant}
    >
      {children}

      {icon && (
        <Icon>
          {icon({
            width: 12,
            height: 12,
            color: colors.one
          })}
        </Icon>
      )}
    </Container>
  )
}

Button.defaultProps = {
  variant: 'primary',
  size: 'default',
  full: false
}
