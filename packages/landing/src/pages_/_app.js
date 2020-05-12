import React, { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { ThemeProvider } from 'styled-components'

import { Tokens, Reset } from '../components'

const tagManagerArgs = {
  gtmId: 'GTM-MD9MMWS'
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <ThemeProvider theme={Tokens}>
      <Reset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
