const { join } = require('path')

module.exports = {
  source: join(process.cwd(), 'src'),
  build: join(process.cwd(), 'build'),
  components: join(process.cwd(), '../components/src'),
  public: join(process.cwd(), 'public')
}
