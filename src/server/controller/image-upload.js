'use strict';

const maxFileSizeInByte = 1048576 * 24;
const co = require('co');
const fs = require('co-fs');
const mongoose = require('mongoose');
//mongoose model
const Image = require('../../model/').Image;
const ImageAsset = require('../../model/').ImageAsset;
const gmIdentify = require('./gm-identify');


exports.register = function (server, options, next) {
  //ensure asset orig fold
  const uploadFolder = options.uploadFolder || process.env.ASSET_ROOT + '/upload/';
  require('mkdirp').sync(uploadFolder);
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
            let imgMeta = yield gmIdentify(payload.file);
            let path = uploadFolder + imgMeta.Signature + '.' + imgMeta.format.toLowerCase();
            //yield fs.access(path, fs.F_OK);
            yield fs.writeFile(path, payload.file);
            try {
              let asset = yield ImageAsset.create({
                  url: path,
                  gmIdentify: imgMeta
              });
            } catch (err) {
              return reply(err);
            }
            let image = yield Image.create({
              assets: [{
                asset,
                width: asset.gmIdentify.size.width,
                height: asset.gmIdentify.size.height
              }],
            });
          } else throw new Error();
        }).then( () => {
          console.log('should be ok')
          reply();
        }).catch( err => {
        //  throw err;
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
