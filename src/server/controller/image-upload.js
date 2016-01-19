'use strict';

const maxFileSizeInByte = 1048576 * 24;
const co = require('co');
const fs = require('co-fs');
const mongoose = require('mongoose');
//mongoose model
const Image = mongoose.model('Image', require('../../model/image'));
const gmIdentify = require('./gm-identify');
//ensure asset folder
require('mkdirp').sync(process.env.ASSET_ROOT);


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
            var imgMeta = yield gmIdentify(payload.file);
            let path = options.temp || process.env.ASSET_ROOT;
            path += '/' + imgMeta.Signature + '.' + imgMeta.format.toLowerCase();
            yield fs.writeFile(path, payload.file);
            let newOne = yield new Image({
              url: path,
              gmIdentify: imgMeta
            });
            yield newOne.save();
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
