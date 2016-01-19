'use strict';
const Schema = require('mongoose').Schema;

let ImageSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  gmIdentify: {
    type: Schema.Types.Mixed,
    required: false
  }
});

module.exports = ImageSchema;
