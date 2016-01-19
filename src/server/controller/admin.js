exports.register = function (server, options, next) {
  server.route({
    method: 'GET',
    path: options.route || '/admin',
    handler: (request, reply) => {
      reply('<!DOCTYPE html><meta charset="utf-8"><script src="https://rawgit.com/enyo/dropzone/master/dist/dropzone.js"></script><link rel="stylesheet" href="https://rawgit.com/enyo/dropzone/master/dist/dropzone.css"><form action="/upload" class="dropzone"></form>');
    }
  });
  next();
};

exports.register.attributes = {
    name: 'admin',
    version: '0.1.0'
};
