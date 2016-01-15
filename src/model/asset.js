const mongoose = require('mongoose');

let AssetSchema = mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: false
  },
});
