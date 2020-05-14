import EventEmitter from 'eventemitter3'

const eventEmitter = new EventEmitter()

const on = (event, fn) => eventEmitter.on(event, fn)
const emit = (event, payload) => eventEmitter.emit(event, payload)
const once = (event, fn) => eventEmitter.once(event, fn)
const removeListener = (event, fn) => eventEmitter.removeListener(event, fn)

const EVENTS = {
  reload: 'reload'
}

export { on, once, emit, removeListener, EVENTS }
