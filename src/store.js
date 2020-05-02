import { action, createStore } from 'easy-peasy'
import { composeWithDevTools } from 'redux-devtools-extension'
import { always, evolve } from 'ramda'

const state = {
  config: {
    url: '',
    setUrl: action((state, url) =>
      evolve(
        {
          url: always(url)
        },
        state
      )
    )
  }
}

export const store = createStore(state, {
  compose: composeWithDevTools({ trace: true })
})
