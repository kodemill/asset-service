const hapi = require('hapi');
const server = new hapi.Server();

server.connection({
  port: process.env.HAPI_PORT
});
