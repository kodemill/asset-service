'use strict';

const mongoose = require('mongoose');
const host = process.env.MONGO_HOST || 'localhost';
const database = process.env.MONGO_DB || 'test';
//mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
const testUri = `mongodb:\/\/${host}/${database}`;


module.exports = new Promise((res, rej) => {
  mongoose.connect(testUri);
  mongoose.connection.on('open', () => {
    //open,log
    console.log('mongo connection ok')
    res();
  });
  mongoose.connection.on('error', () => {
    //problems, log
    console.log('mongo connection nook');
    rej();
  })
});
