'use strict';
const Schema = require('mongoose').Schema;
module.exports = new Schema({
  url: {
    type: String,
    required: true,
    unique: true
  },
  gmIdentify: {
    type: Schema.Types.Mixed,
    required: false
  }
});
