const CracoAlias = require('craco-alias')
const { getLoader, loaderByName } = require('@craco/craco')

const PATH = require('./path')

module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (config, { env, paths }) => {
      const { isFound, match } = getLoader(config, loaderByName('babel-loader'))

      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include]

        match.loader.include = include.concat[PATH.components]
      }

      return config
    }
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        baseUrl: './',
        aliases: {
          '@/components': './src/components',
          '@/containers': './src/containers',
          '@/screens': './src/screens',
          '@/assets': './src/assets',
          '@/helpers': './src/helpers',
          '@/__mocks__': './src/__mocks__',
          '@/store': './src/store',
          '@/emitter': './src/emitter',
          '@/constants': './src/constants',
          '@/services': './src/services'
        }
      }
    }
  ]
}
