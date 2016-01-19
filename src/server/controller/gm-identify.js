const gm = require('gm');


module.exports = buffer => {
  return new Promise( (resolve, reject) => {
    gm(buffer).identify( (err, value) => {
      if(err) reject();
      else resolve(value);
    });
  });
};
