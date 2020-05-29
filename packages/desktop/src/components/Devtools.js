import React from 'react'
import { Resizable } from 're-resizable'
import styled from 'styled-components'
import { theme } from 'styled-tools'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme('colors.one')};
`

const style = {
  position: 'absolute',
  top: 0,
  right: 0
}

export const Devtools = () => {
  return (
    <Resizable
      style={style}
      enable={{
        top: false,
        bottom: false,
        right: false,
        left: true
      }}
      defaultSize={{
        width: 320,
        height: '100%'
      }}
    >
      <Container></Container>
    </Resizable>
  )
}
