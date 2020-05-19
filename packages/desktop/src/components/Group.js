import React, {
  useContext,
  cloneElement,
  Children,
  isValidElement,
  useState
} from 'react'
import styled, { ThemeContext, css } from 'styled-components'
import { theme, switchProp, ifProp } from 'styled-tools'
import { space } from 'styled-system'

import { Text } from '@responsivy/components'
import { equals } from 'ramda'

const Container = styled.div`
  ${space}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${ifProp({ orientation: 'horizontal' }, 'row', 'column')};

  .first {
    ${switchProp('orientation', {
      horizontal: css`
        border-radius: ${theme('border.radius.four')} 0 0
          ${theme('border.radius.four')};
        border-right-width: 0;
      `,
      vertical: css`
        ${theme('border.radius.four')} ${theme('border.radius.four')} 0 0;
        border-bottom-width: 0;
      `
    })};
  }

  .middle {
    ${switchProp('orientation', {
      horizontal: css`
        border-right-width: 0;
      `,
      vertical: css`
        border-bottom-width: 0;
      `
    })};
  }

  .last {
    border-radius: ${switchProp('orientation', {
      horizontal: css`0 ${theme('border.radius.four')}
        ${theme('border.radius.four')} 0`,
      vertical: css`0 0  
        ${theme('border.radius.four')} ${theme('border.radius.four')}`
    })};
  }

  .hasActive {
    background-color: ${theme('colors.five')};

    span {
      color: ${theme('colors.one')};
    }
  }
`

const Content = styled.div`
  width: 100%;
  height: 25px;
  border: 1px solid ${theme('colors.five')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Option = ({ id, className, onClick, children }) => {
  const { colors } = useContext(ThemeContext)

  return (
    <Content id={id} className={className} onClick={onClick}>
      <Text fontSize="13px" color={colors.five}>
        {children}
      </Text>
    </Content>
  )
}

Option.displayName = 'Option'

const isInvalidChild = (child) =>
  isValidElement(child) && child.type.displayName === 'Option'

export const Group = ({
  hasActiveId,
  children,
  orientation = 'horizontal',
  ...props
}) => {
  const [hasActive, setHasActive] = useState(hasActiveId)

  const [first, ...childrens] = Children.map(children, (child) => {
    if (!isInvalidChild(child)) {
      throw new Error(
        "TypeError: Group children should be Group.Option's component"
      )
    }

    return child
  })

  const getHasActive = (id) => (equals(id, hasActive) ? 'hasActive ' : '')

  const firstChild = cloneElement(first, {
    className: `${getHasActive(first.props.id)} first`,
    onClick: (...args) => {
      first.props.id && setHasActive(first.props.id)
      first.props.onClick(...args)
    }
  })

  const last = childrens.pop()

  const lastChild = cloneElement(last, {
    className: `${getHasActive(last.props.id)} last`,
    onClick: (...args) => {
      last.props.id && setHasActive(last.props.id)
      last.props.onClick(...args)
    }
  })

  const middle = childrens.map((child) =>
    cloneElement(child, {
      className: `${getHasActive(child.props.id)}middle`,
      onClick: (...args) => {
        child.props.id && setHasActive(child.props.id)
        child.props.onClick(...args)
      }
    })
  )

  const aggregatedChildren = [firstChild, ...middle, lastChild]

  return (
    <Container {...props} orientation={orientation}>
      {aggregatedChildren}
    </Container>
  )
}

Group.Option = Option
