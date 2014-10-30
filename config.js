var path = require('path'),
    config;

config = {
    development: {
        url: 'http://eric-range.de',

        //  mail: {
        //      transport: 'SMTP',
        //      options: {
        //          service: 'Mailgun',
        //          auth: {
        //              user: '', // mailgun username
        //              pass: ''  // mailgun password
        //          }
        //      }
        //  },

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: '80'
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },
    
    production: {
        url: 'http://eric-range.de',
        mail: {},
        database: {
            client: 'mysql',
            connection: {
                host: '127.0.0.1',
                user: 'web-ghost',
                
                /* You can only connect to MySQL from 127.0.0.1 ;) */
                password: 'Pq5N6zObD3',
                database: 'eric-range.de',
                charset: 'utf8'
            }
        },
        server: {
            host: '0.0.0.0',
            port: '2368'
        }
    }
};

module.exports = config;
