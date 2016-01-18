const maxFileSizeInByte = 1048576 * 24;
const co = require('co');
const fs = require('co-fs');
const hapi = require('hapi');

const uploadPath = function () {

}
const config = {
  payload: {
    output: 'data', //we prefer Buffer instead of Stream :D
    parse: true,
    allow: 'multipart/form-data',
    maxBytes: maxFileSizeInByte
  }
};

module.exports = (request, reply) => {
  co(function * () {
    let payload = request.payload;
    if (payload.file && Buffer.isBuffer(payload.file)) {
      let filename = payload.file.hapi.filename;
      yield fs.writeFile(uploadPath(), payload.file);
    } else throw new Error('FUU I ASKED FOR BUFFERS!')
  }).then( () => {
    return reply();
  }).catch( err => {
    return reply();
  })
};





function get (request, reply) {
  co(function* () {
    return yield db.getUsers();
  })
    .then(function (response) {
      reply(response);
    })
    .catch(function (err) {
      request.server.log([
        'error',
        'login',
        err
      ]);
      return reply(boom.badImplementation());
    });
}
