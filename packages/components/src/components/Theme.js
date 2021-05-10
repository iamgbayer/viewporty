import { merge } from 'ramda'

import { Tokens } from './Tokens'

const withTokens = (theme) => merge(theme, Tokens)

export const Theme = {
  dark: withTokens({
    theme: 'dark',
    colors: {
      primary: {
        100: '#3D56F0'
      },
      accent: {
        100: '#393939',
        200: '#2d2d2d',
        300: '#fafafa',
        400: '#ccc',
        500: '#414141',
        600: '#454545',
        700: '#E9E9E9',
        800: '#fff',
        900: '#595959'
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
      twelve: '#E9E9E9'
    },
    shadow: {
      one: '0px 12px 19px rgba(0, 0, 0, 0.0851449)',
      two: '0px 10px 39px rgba(0,0,0,0.6)'
    }
  })
}
