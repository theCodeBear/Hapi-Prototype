'use strict';

var Hapi = require('hapi');
var server = new Hapi.Server();
var plugins = require('./config/plugins');
var routes = require('./config/routes');
var views = require('./config/views');

server.connection({port: process.env.PORT});

server.register(plugins, function(err) {
  if (err) { console.log('SERVER SCREWED UP'); }
  server.route(routes);
  server.views(views);
  server.start(function() {
    console.log('info', server.info.uri);
  });
});
