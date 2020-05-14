import { merge } from 'ramda'

import { Tokens } from './Tokens'

const withTokens = (theme) => merge(theme, Tokens)

export const Theme = {
  dark: withTokens({
    theme: 'dark',
    colors: {
      one: '#282C34',
      two: '#1A1D21',
      three: '#fff',
      four: '#5468FF',
      five: '#6E7279',
      seven: 'rgba(68, 71, 90, 0.6)',
      six: '#44475A'
    },
    shadow: {
      one: '0px 12px 19px rgba(0, 0, 0, 0.0851449)'
    }
  }),
  light: withTokens({
    theme: 'light',
    colors: {
      one: '#fff',
      two: '#F3F5F9',
      three: '#344356',
      four: '#5468FF',
      seven: 'rgba(68, 71, 90, 0.6)'
    },
    shadow: {
      one: '0px 12px 19px rgba(0, 0, 0, 0.0851449)',
      two: '0px 10px 39px rgba(0,0,0,0.6)'
    }
  })
}
