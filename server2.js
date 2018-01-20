var httpProxy = require('http-proxy');

var port = process.env.PORT || 8000;

var routing = {
  '/devices': { port: process.env.DEVICES_PORT || 80, host: process.env.DEVICES_URI }
}

var server = httpProxy.createServer(
  require('./lib/uri-middleware')(routing)
).listen(port);
