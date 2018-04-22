module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'reactLightNotifications',
      externals: {
        react: 'React'
      }
    }
  }
}
