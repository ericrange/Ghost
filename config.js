var path = require('path'),
  config;

config = {
  production: {
    url: '/',
    mail: {},
    database: {
      client: 'mysql',
      connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'twofish',
        database: 'Blog',
        charset: 'utf8'
      }
    },

    server: {
      host: '127.0.0.1',
      port: '2368'
    },

    logging: false
  }
};

module.exports = config;
