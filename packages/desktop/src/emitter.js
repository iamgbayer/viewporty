import EventEmitter from 'eventemitter3'

const eventEmitter = new EventEmitter()

const on = (event, fn) => eventEmitter.on(event, fn)
const emit = (event, payload) => eventEmitter.emit(event, payload)

const EVENTS = {
  reload: 'reload'
}

export { on, emit, EVENTS }
