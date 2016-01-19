const hapi = require('hapi');
const db = require('./db/connect-mongo');

const server = new hapi.Server();

server.connection({
  port: process.env.HAPI_PORT
});


server.register({
    register: require('./controller/image-upload')
  }, (err) => {
    //log
});
server.register({
    register: require('./controller/admin')
  }, (err) => {
    //log
});


server.start();
