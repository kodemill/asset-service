const mongoose = require('mongoose');
module.exports = {
  ImageAsset: mongoose.model('ImageAsset', require('./image-asset.schema')),
  Image: mongoose.model('Image', require('./image.schema')),
  Gallery: mongoose.model('Gallery', require('./gallery.schema')),
};
