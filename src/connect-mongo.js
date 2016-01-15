'use strict';

const mongoose = require('mongoose');
const host = process.env.MONGO_HOST || 'localhost';
const database = process.env.MONGO_DB || 'test';
//mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
const testUri = `mongodb://${host}/${database}`;

mongoose.connect(testUri);

//TODO
mongoose.connection.on('open', {} => {
  //open,log
});
mongoose.connection.on('error', {} => {
  //problems, log
})
