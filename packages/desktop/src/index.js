import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from 'styled-components'
import { StoreProvider } from 'easy-peasy'
import { PersistGate } from 'redux-persist/integration/react'

import { Theme, Reset } from '@viewporty/components'
import { store, persistor } from '@/store'

import Router from './Router'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={Theme.dark}>
          <Reset />
          <Router />
        </ThemeProvider>
      </PersistGate>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
