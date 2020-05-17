import { action, createStore } from 'easy-peasy'
import * as localForage from 'localforage'
import { persistReducer, persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  always,
  evolve,
  map,
  when,
  propEq,
  assoc,
  append,
  uniq,
  pipe
} from 'ramda'

const state = {
  history: {
    urls: [],
    url: '',
    setUrl: action((state, url) =>
      evolve(
        {
          url: always(url),
          urls: always(pipe(append(url), uniq)(state.urls))
        },
        state
      )
    )
  },
  config: {
    scale: 75,
    modal: null,
    align: 'wrap',
    isMenuCollapsed: false,
    setAlign: action((state, align) =>
      evolve(
        {
          align: always(align)
        },
        state
      )
    ),
    setScale: action((state, scale) =>
      evolve(
        {
          scale: always(scale)
        },
        state
      )
    ),
    setMenuCollapsed: action((state, isMenuCollapsed) =>
      evolve(
        {
          isMenuCollapsed: always(isMenuCollapsed)
        },
        state
      )
    ),
    setModal: action((state, modal) =>
      evolve(
        {
          modal: always(modal)
        },
        state
      )
    )
  },
  devices: {
    data: [
      {
        name: 'Moto G4',
        category: 'phone',
        width: 360,
        height: 640,
        isHidden: false,
        scale: 75,
        orientation: 'portrait',
        userAgent:
          'Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Mobile Safari/537.36'
      },
      {
        name: 'iPad',
        category: 'tablet',
        isHidden: true,
        width: 768,
        height: 1024,
        orientation: 'portrait',
        scale: 75,
        userAgent:
          'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
      },
      {
        name: 'iPhone 5/SE',
        category: 'phone',
        width: 320,
        height: 568,
        isHidden: false,
        orientation: 'portrait',
        scale: 75,
        userAgent:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 13_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/66.6 Mobile/14A5297c Safari/602.1'
      },
      {
        name: 'iPhone 6/7/8',
        category: 'phone',
        isHidden: true,
        width: 375,
        height: 667,
        orientation: 'portrait',
        scale: 75,
        userAgent:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 13_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/66.6 Mobile/14A5297c Safari/602.1'
      },
      {
        name: 'iPhone XR',
        category: 'phone',
        isHidden: true,
        width: 414,
        height: 896,
        orientation: 'portrait',
        scale: 75,
        userAgent:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 13_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/66.6 Mobile/14A5297c Safari/602.1'
      },
      {
        name: 'Samsung Galaxy S9',
        category: 'phone',
        isHidden: true,
        width: 360,
        height: 740,
        orientation: 'portrait',
        scale: 75,
        userAgent:
          'Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.137 Mobile Safari/537.36'
      },
      {
        name: 'iPhone XS',
        category: 'phone',
        isHidden: true,
        width: 375,
        height: 812,
        orientation: 'portrait',
        scale: 75,
        userAgent:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 13_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/66.6 Mobile/14A5297c Safari/602.1'
      },
      {
        name: 'Pixel 3',
        category: 'phone',
        isHidden: true,
        scale: 75,
        width: 411,
        height: 824,
        orientation: 'portrait',
        userAgent:
          'Mozilla/5.0 (Linux; Android 9; Pixel 3 XL Build/PD1A.180621.003) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Mobile Safari/537.36'
      },
      {
        name: 'Pixel 2',
        category: 'phone',
        isHidden: true,
        scale: 75,
        width: 411,
        height: 731,
        orientation: 'portrait',
        userAgent:
          'Mozilla/5.0 (Linux; Android 9; Pixel) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.93 Mobile Safari/537.36'
      }
    ],
    setDevices: action((state, data) => evolve({ data: always(data) }, state)),
    toggleOrientation: action((state, orientation) => {
      const { data } = state

      const devices = map(assoc('orientation', orientation), data)

      return evolve({ data: always(devices) }, state)
    }),
    toggleVisibility: action((state, { name, isHidden }) => {
      const { data } = state

      const devices = map(
        when(propEq('name', name), assoc('isHidden', isHidden)),
        data
      )

      return evolve({ data: always(devices) }, state)
    })
  }
}

const persistConfig = {
  key: 'root',
  storage: localForage
}

export const store = createStore(state, {
  compose: composeWithDevTools({ trace: true }),
  reducerEnhancer: (reducer) => persistReducer(persistConfig, reducer),
  disableImmer: true
})

export const persistor = persistStore(store)
