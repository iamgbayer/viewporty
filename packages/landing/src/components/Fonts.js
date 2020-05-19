import { createGlobalStyle } from 'styled-components'
import { theme } from 'styled-tools'

import HKGroteskBold from '@/assets/fonts/HKGrotesk-Bold.otf'
import HKGroteskMedium from '@/assets/fonts/HKGrotesk-Medium.otf'
import HKGroteskRegular from '@/assets/fonts/HKGrotesk-Regular.otf'
import HKGroteskLight from '@/assets/fonts/HKGrotesk-Light.otf'

export const Fonts = createGlobalStyle`
  body {
    background-color: ${theme('colors.one')};

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
      background-color: ${theme('colors.two')};
    }
  
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
  }

  @font-face {
    font-family: 'HK Grotesk';
    font-style: normal;
    font-weight: 900;
    src: url(${HKGroteskBold});
  }

  @font-face {
    font-family: HK Grotesk;
    font-style: normal;
    font-weight: 600;
    src: url(${HKGroteskMedium});
  }

  @font-face {
    font-family: 'HK Grotesk';
    font-style: normal;
    font-weight: 400;
    src: url(${HKGroteskRegular});
  }

  @font-face {
    font-family: 'HK Grotesk';
    font-style: normal;
    font-weight: 300;
    src: url(${HKGroteskLight});
  }
`
