import React, {
  useContext,
  cloneElement,
  Children,
  isValidElement,
  useState
} from 'react'
import styled, { css } from 'styled-components'
import { theme, switchProp, ifProp } from 'styled-tools'
import { equals } from 'ramda'
import { space } from 'styled-system'
import { Option } from './Option'

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
    background-color: ${theme('colors.accent.900')};

    span {
      color: ${theme('colors.accent.400')};
    }
  }
`

const isInvalidChild = (child: React.ReactChild) =>
  isValidElement(child) && child.type.displayName === 'Option'

type Props = {
  hasActiveId: boolean
  children: React.ReactNode
}

export const Group = ({
  hasActiveId,
  children,
  orientation = 'horizontal',
  ...props
}: Props) => {
  const [hasActive, setHasActive] = useState(hasActiveId)

  const [first, ...childrens] = Children.map(children, (child) => {
    if (!isInvalidChild(child)) {
      throw new Error(
        "TypeError: Group children should be Group.Option's component"
      )
    }

    return child
  })

  const getHasActive = (id: string) =>
    equals(id, hasActive) ? 'hasActive ' : ''

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
