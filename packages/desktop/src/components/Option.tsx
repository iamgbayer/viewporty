import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { theme } from 'styled-tools'
import { Text } from '@viewporty/components'

type Props = {
  id: string
  className: string
  onClick: () => void
  children: React.ReactNode
}

const Content = styled.div`
  width: 100%;
  height: 25px;
  border: 1px solid ${theme('colors.accent.900')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const Option = ({ id, className, onClick, children }: Props) => {
  return (
    <Content id={id} className={className} onClick={onClick}>
      <Text fontSize="13px" color="accent.400">
        {children}
      </Text>
    </Content>
  )
}

Option.displayName = 'Option'
