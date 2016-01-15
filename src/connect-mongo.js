'use strict';

const mongoose = require('mongoose');
/*
 * mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
 */
const testUri = 'mongodb://localhost/test123';
const connection = mongoose.connect(testUri);
