const CracoAlias = require('craco-alias')

module.exports = {
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
          '@/utils': './src/utils',
          '@/__mocks__': './src/__mocks__',
          '@/store': './src/store',
          '@/constants': './src/constants',
          '@/services': './src/services'
        }
      }
    }
  ]
}
