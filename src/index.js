import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from 'styled-components'
import { StoreProvider } from 'easy-peasy'

import { Theme, Reset } from '@/components'
import { store } from '@/store'

import Router from './Router'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={Theme.dark}>
        <Reset />
        <Router />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
