import { merge } from 'ramda'

import { Tokens } from './Tokens'

const withTokens = (theme) => merge(theme, Tokens)

export const Theme = {
  dark: withTokens({
    theme: 'dark',
    colors: {
      one: '#282C34',
      two: '#1A1D21',
      three: '#fafafa',
      four: '#3D56F0',
      five: '#aaa',
      seven: 'rgba(68, 71, 90, 0.6)',
      six: '#44475A',
      twelve: '#E9E9E9',
      thirteen: '#fff'
    },
    devtools: {
      colors: {
        one: '#87b2bc',
        two: '#AE8152',
        three: '#E3C381',
        four: '#B7C47F',
        five: '#35D4C7'
      }
    },
    shadow: {
      one: '0px 12px 19px rgba(0, 0, 0, 0.0851449)'
    }
  }),
  light: withTokens({
    theme: 'light',
    colors: {
      one: '#fafafa',
      two: '#F3F5F9',
      three: '#344356',
      four: '#3D56F0',
      seven: 'rgba(68, 71, 90, 0.6)',
      eight: '#607B9E',
      nine: '#5468FF',
      ten: '#E1EBFC',
      eleven: '#aaa',
      twelve: '#E9E9E9',
      thirteen: '#fff'
    },
    shadow: {
      one: '0px 12px 19px rgba(0, 0, 0, 0.0851449)',
      two: '0px 10px 39px rgba(0,0,0,0.6)'
    }
  })
}
