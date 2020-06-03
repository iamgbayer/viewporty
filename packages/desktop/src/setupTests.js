import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

window.require = () => ({
  require: jest.fn(),
  match: jest.fn(),
  app: jest.fn(),
  remote: {
    app: {
      getAppPath: jest.fn()
    }
  },
  dialog: jest.fn(),
  platform: jest.fn()
})
