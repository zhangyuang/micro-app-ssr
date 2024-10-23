module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    liveReload: true,
    watchFiles: {
      paths: ['src/**/*', './node_modules/**/*'],
      options: {
        usePolling: true,
      },
    },
    allowedHosts: 'all'
  }
}