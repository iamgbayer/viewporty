import React, { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { ThemeProvider } from 'styled-components'

import { Theme, Reset } from '@viewporty/components'
import { Fonts } from 'components'

const tagManagerArgs = {
  gtmId: 'GTM-MD9MMWS'
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <ThemeProvider theme={Theme.dark}>
      <Reset />
      <Fonts />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
