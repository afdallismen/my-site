const { withNextein } = require('nextein/config')
const withSass = require('@zeit/next-sass')

module.exports = withNextein(withSass({
  cssModules: true
}))
