const hapi = require('hapi');

const co = require('co');

const server = new hapi.Server();

server.connection({
  port: process.env.HAPI_PORT
});

co(function*() {
    yield require('./db/connect-mongo');
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
})
.then(()=>{

  server.start();

})
.catch(err => console.log(err));
