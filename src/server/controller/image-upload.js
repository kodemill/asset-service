'use strict';

const maxFileSizeInByte = 1048576 * 24;
const co = require('co');
const fs = require('co-fs');
const mongoose = require('mongoose');
const Image = mongoose.model('Image', require('../../model/image'));
const mkdirp = require('mkdirp').sync(process.env.ASSET_ROOT);


exports.register = function (server, options, next) {
  server.route({
    method: 'POST',
    path: options.route || '/upload',
    config: {
      payload: {
        output: 'data',
        parse: true,
        allow: 'multipart/form-data'
      },
      handler: (request, reply) => {
        co(function* () {
          let payload = request.payload;
          if (payload.file && Buffer.isBuffer(payload.file)) {
            console.log(Object.keys(request))
            let path = options.temp || process.env.ASSET_ROOT;
            path += '/ADMIN' + Date.now().toString() + '.jpg';
            yield fs.writeFile(path, payload.file);
        //  } else if (payload.file && Stream.isStream(payload.file) {

          } else throw new Error();
        }).then( () => {
          reply();
        }).catch( err => {
          console.log(err);
          reply();
        });
       }
     }
  });
  next();
};

exports.register.attributes = {
    name: 'image-upload',
    version: '0.1.0'
};
