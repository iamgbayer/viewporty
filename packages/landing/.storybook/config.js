import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { withNotes } from '@storybook/addon-notes'
import { ThemeProvider } from 'styled-components'

import { Tokens } from '@components/Tokens'

addDecorator(withNotes)

addDecorator(story => <ThemeProvider theme={Tokens}>{story()}</ThemeProvider>)

withOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  name: 'Feedl UI',
  url: 'http://ui.feedl.co'
})

const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
