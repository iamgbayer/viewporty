import { createGlobalStyle } from 'styled-components'
import { theme } from 'styled-tools'

export const Fonts = createGlobalStyle`
  body {
    background-color: ${theme('colors.accent.100')};

    ::-webkit-scrollbar {
      background: transparent;
      width: 6px;
      height: 6px;
    }
  
    ::-webkit-scrollbar * {
      background: transparent;
    }
  
    ::-webkit-scrollbar-track {
      border: solid transparent;
      background: transparent;
    }
  
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: ${theme('colors.accent.200')};
    }
  
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
  }

`
