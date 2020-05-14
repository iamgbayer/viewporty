import React, { memo, Children, isValidElement, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { prop, ifProp } from 'styled-tools'
import styled from 'styled-components'

import { Provider } from './Context'
import { Option } from './Option'

const Container = styled.div`
  display: flex;
  flex-direction: ${prop('orientation')};
  align-items: ${ifProp({ orientation: 'column' }, 'flex-start', 'center')};
  justify-content: space-evenly;
  width: 100%;
`

const map = children =>
  Children.map(children, child => ({
    [child.props.id]: child.props.checked
  }))

const isValidOption = child =>
  isValidElement(child) && child.type.displayName === 'Option'

export const Radio = memo(
  ({ size, name, onChange, children, labelAlign, orientation }) => {
    const options = Object.assign({}, ...map(children))

    const childrens = Children.map(children, child => {
      if (!isValidOption(child)) {
        throw new Error(
          'TypeError: Radio component children is invalid, please use Option.'
        )
      }

      return cloneElement(child, { name })
    })

    return (
      <Provider
        size={size}
        labelAlign={labelAlign}
        onChange={onChange}
        initial={options}
      >
        <Container labelAlign={labelAlign} orientation={orientation}>
          {childrens}
        </Container>
      </Provider>
    )
  }
)

Radio.Option = Option

Radio.defaultProps = {
  size: 'default',
  orientation: 'row',
  labelAlign: 'bottom',
  onChange: () => {}
}

Radio.propTypes = {
  orientation: PropTypes.oneOf(['row', 'column']),
  labelAlign: PropTypes.oneOf(['bottom', 'right', 'left', 'top']),
  name: PropTypes.string.isRequired
}
