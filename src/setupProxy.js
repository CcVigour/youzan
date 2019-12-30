const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://10.20.152.29:5000',
      changeOrigin: true,
    })
  );
};