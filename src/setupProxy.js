const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
<<<<<<< HEAD
      target: 'http://10.20.152.29:5000',
=======
      // target: 'http://10.20.152.25:5000',
      target: 'http://localhost:5000',
>>>>>>> lxp
      changeOrigin: true,
    })
  );
};