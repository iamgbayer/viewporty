import React, { memo, useState, useContext } from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import { ifProp, switchProp, theme } from 'styled-tools'

import { Closeable } from './Closeable'
import { Icon } from './Icon'

const defaultValue = {
  label: 'Select'
}

const Container = styled.div`
  width: ${ifProp('full', '100%', '240px')};
  display: flex;
  flex-direction: column;
  position: relative;
`

const Label = styled.span`
  font-family: ${theme('font.family.primary')};
  font-size: ${theme('font.size.fourteen')};
  color: ${theme('colors.support.quintiary')};
  margin-bottom: 5px;
`

const Selectable = styled.div`
  width: 100%;
  height: ${switchProp('size', {
    default: '40px',
    large: '48px'
  })};
  padding: 0 15px;
  color: ${theme('colors.tertiary')};
  background-color: ${switchProp('variant', {
    primary: theme('colors.quartiary'),
    secondary: theme('colors.secondary')
  })};

  border-radius: ${theme('border.radius.five')};
  font-family: ${theme('font.family.primary')};
  font-size: ${theme('font.size.twenty')};
  border: 1px solid
    ${ifProp(
      'active',
      theme('colors.support.secondary'),
      theme('colors.support.secondary')
    )};

  outline: 0;
  appearance: none;
  cursor: ${ifProp('disabled', 'not-allowed', 'pointer')};
  position: relative;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${ifProp(
    'icon',
    css`
      padding-left: 36px;
    `
  )}
`

const Options = styled.ul`
  width: 100%;
  top: calc(100% + 5px);
  z-index: 999;
  position: absolute;
  border-radius: ${theme('border.radius.five')};
  background-color: ${theme('colors.quartiary')};
  border: 1px solid ${theme('colors.support.secondary')};
  list-style: none;
  display: ${ifProp({ show: true }, 'block', 'none')};
`

const Option = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding-left: 14px;
  padding-right: 14px;
  cursor: pointer;
  font-size: ${theme('font.size.fourteen')};
  color: ${theme('colors.support.quintiary')};

  font-weight: ${ifProp(
    'selected',
    theme('font.weight.bold'),
    theme('font.weight.regular')
  )};

  &:hover {
    font-weight: ${theme('font.weight.bold')};
  }
`

const Content = styled.div`
  display: flex;
  align-items: center;
  left: 16px;
  position: absolute;
  height: 40px;
  line-height: 40px;
`

const Title = styled.span`
  font-family: ${theme('font.family.primary')};
  font-size: ${theme('font.size.fifteen')};
  color: ${theme('colors.support.quintiary')};
`

export const Select = memo(
  ({
    options,
    onChange,
    icon,
    defaultValue,
    label,
    disabled,
    required,
    full,
    size,
    variant
  }) => {
    const { colors } = useContext(ThemeContext)
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState(defaultValue)
    const [focus, setFocus] = useState(false)

    const toggleShow = () => setShow(!show)
    const toCloseOutside = () => {
      setShow(false)
      setFocus(false)
    }

    const whenSelected = ({ text, value }) => () => {
      toggleShow()
      setSelected(text)
      onChange(value)
    }

    const whenFocus = () => {
      setFocus(!focus)
    }

    const hasSelected = () => Select.defaultValue.label !== selected

    return (
      <Container full={full}>
        {label && (
          <Label required={required} disabled={disabled} onClick={whenFocus}>
            {label}
          </Label>
        )}

        <Closeable whenClose={toCloseOutside}>
          <Selectable
            variant={variant}
            size={size}
            icon={icon}
            active={show || focus}
            onClick={!disabled ? toggleShow : undefined}
            disabled={disabled}
          >
            {icon && (
              <Content>
                {icon({ width: 14, height: 14, color: colors.tertiary })}
              </Content>
            )}

            <Title
              hasSelected={Select.defaultValue.label !== selected}
              disabled={disabled}
            >
              {selected}
            </Title>

            <Icon
              name="down"
              width={6}
              color={hasSelected() ? colors.tertiary : colors.tertiary}
            />
          </Selectable>

          <Options show={show}>
            {options.map(({ value, text }) => (
              <Option
                key={value}
                selected={text === selected}
                value={value}
                onClick={whenSelected({ value, text })}
              >
                {text}
              </Option>
            ))}
          </Options>
        </Closeable>
      </Container>
    )
  }
)

Select.defaultProps = {
  size: 'default',
  variant: 'primary',
  defaultValue: defaultValue.label,
  onChange: () => {}
}

Select.propTypes = {
  defaultValue: PropTypes.string,
  icon: PropTypes.func,
  variant: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

Select.defaultValue = defaultValue
