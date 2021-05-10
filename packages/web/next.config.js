const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withVideos = require('next-videos')
const withTM = require('next-transpile-modules')

module.exports = withPlugins(
  [withFonts, withImages, withVideos, withTM(['@viewporty/components'])],
  {
    future: {
      webpack5: true
    }
  }
)
