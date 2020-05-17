const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withVideos = require('next-videos')
const withTM = require('next-transpile-modules')

const PATH = require('./path')

module.exports = withPlugins(
  [withFonts, withImages, withVideos, withTM(['@responsivy/components'])],
  {
    webpack: (config) => {
      config.resolve.alias['@'] = PATH.source

      return config
    }
  }
)
