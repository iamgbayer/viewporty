import React from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'

const Container = styled.div`
  display: flex;
`

const Content = styled.div`
  width: 100%;
`

const Bar = styled.div`
  min-width: 120px;
  background-color: ${theme('colors.one')};
`

export const Sidebar = ({ children }) => {
  return (
    <Container>
      <Bar></Bar>

      <Content>{children}</Content>
    </Container>
  )
}
