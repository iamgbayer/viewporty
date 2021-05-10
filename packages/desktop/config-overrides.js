const { babelInclude, override } = require('customize-cra')

const path = require('path')

const addWebpackTarget = (target) => (config) => {
  config.target = target
  return config
}

module.exports = override(
  addWebpackTarget('electron-renderer'),
  babelInclude([path.resolve('../components'), path.resolve('src')])
)
