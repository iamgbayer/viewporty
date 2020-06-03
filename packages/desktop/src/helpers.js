import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StoreProvider } from 'easy-peasy'
import { Theme, Reset } from '@viewporty/components'
import { store } from '@/store'

const defaultDependencies = {
  store
}

export const isValidUrl = (string) => {
  const res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  )
  return res !== null
}

export const percentage = (percent, total) =>
  ((percent / 100) * total).toFixed(2)

export const withDependencies = ({ store } = defaultDependencies) => (
  Component
) => (
  <StoreProvider store={store}>
    <ThemeProvider theme={Theme.dark}>
      <Reset />
      {Component}
    </ThemeProvider>
  </StoreProvider>
)
