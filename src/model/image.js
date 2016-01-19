'use strict';
const mongoose = require('mongoose');

let ImageSchema = mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: false
  },
  width: {
    type: Number,
    required: false
  },
  height: {
    type: Number,
    required: false
  }
});

exports = ImageSchema;