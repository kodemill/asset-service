'use strict';
const Schema = require('mongoose').Schema;
module.exports = new Schema({
  title: {
    type: String
  },
  images: [{
    type: Schema.Types.ObjectId,
    ref: 'Image'
  }]
});
