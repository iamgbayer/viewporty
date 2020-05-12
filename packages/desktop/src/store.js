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
    modal: null,
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
        zoom: 100,
        userAgent:
          'Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Mobile Safari/537.36'
      },
      {
        name: 'iPad',
        category: 'tablet',
        width: 768,
        isHidden: true,
        zoom: 100,
        height: 1024,
        userAgent: ''
      },
      {
        name: 'iPhone 5/SE',
        category: 'phone',
        width: 320,
        height: 568,
        isHidden: false,
        zoom: 100,
        userAgent:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 13_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/66.6 Mobile/14A5297c Safari/602.1'
      },
      {
        name: 'iPhone 6/7/8',
        category: 'phone',
        width: 375,
        isHidden: true,
        height: 667,
        zoom: 100,
        userAgent: ''
      },
      {
        name: 'Pixel 2',
        category: 'phone',
        isHidden: true,
        width: 411,
        zoom: 100,
        height: 731,
        userAgent: ''
      }
    ],
    setDevices: action((state, data) => evolve({ data: always(data) }, state)),
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
