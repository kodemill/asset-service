'use strict';
const Schema = require('mongoose').Schema;
module.exports = new Schema({
  title: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  assets: [{
    width: {
      type: Number,
      required: false
    },
    height: {
      type: Number,
      required: false
    },
    asset: {
      type: Schema.Types.ObjectId,
      ref: 'ImageAsset'
    }
  }]
});
