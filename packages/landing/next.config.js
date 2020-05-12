const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const withImages = require('next-images')

module.exports = withPlugins([withFonts, withImages], {
  target: 'serverless'
})
