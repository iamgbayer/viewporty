import { merge } from 'ramda'
import { Tokens } from './Tokens'

const withTokens = (theme) => merge(theme, Tokens)

export const Theme = {
  dark: withTokens({
    colors: {
      one: '#5B5A5A',
      two: '#484747',
      // one: '#282A36',
      // two: '#1A1D21',
      three: '#fff',
      four: '#5468FF',
      five: '#B4B4B9',
      six: '#706F6F'
      // six: '#44475A'
    },
    shadow: {
      one: '0px 12px 19px rgba(0, 0, 0, 0.0851449)'
    }
  }),
  light: withTokens({
    colors: {
      one: '#fff',
      two: '#F3F5F9',
      three: '#344356',
      four: '#5468FF'
    },
    shadow: {
      one: '0px 12px 19px rgba(60, 128, 209, 0.0851449)'
    }
  })
}
