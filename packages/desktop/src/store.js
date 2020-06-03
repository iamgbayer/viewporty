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

import { DEVICES } from '@/constants'

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
    isInspectorVisible: false,
    isDevtoolsVisible: false,
    setAlign: action((state, align) =>
      evolve(
        {
          align: always(align)
        },
        state
      )
    ),
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
    toggleInspectorVisibility: action((state) =>
      evolve(
        {
          isInspectorVisible: always(!state.isInspectorVisible)
        },
        state
      )
    ),
    toggleDevtoolsVisibility: action((state) =>
      evolve(
        {
          isDevtoolsVisible: always(!state.isDevtoolsVisible)
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
    data: DEVICES,
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
