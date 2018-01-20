module.exports = require('./lib/http-proxy');

var httpProxy = require('http-proxy');
httpProxy.createServer(80, 'dorzan.herokuapp.com').listen(process.env.PORT || 8000);
