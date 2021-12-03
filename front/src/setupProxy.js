const createProxyMiddleware = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3651',
      changeOrigin: true,
      withCredentials: true,
      secure: false,
    }),
  )
}
