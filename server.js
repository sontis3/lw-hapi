'use strict';

const Hapi = require('hapi');
const HapiOpenAPI = require('hapi-openapi');
const Path = require('path');
const mongoose = require('mongoose');
const mongoDbUri = 'mongodb://localhost:27017/lw_hapi_db';

const init = async function () {
  const server = new Hapi.Server({
    host: 'localhost',
    port: 3000
  });

  //connect with mongoDB
  mongoose.connect(mongoDbUri, { useNewUrlParser: true });
  mongoose.connection.on('connected', () => {
    console.log(`app is connected to ${mongoDbUri}`);
  });
  mongoose.connection.on('error', err => {
    console.log('error while connecting to mongodb', err);
  });
  //////////////////////////////////////////

  await server.register({
    plugin: HapiOpenAPI,
    options: {
      api: Path.resolve('./config/swagger.json'),
      handlers: Path.resolve('./handlers')
    }
  });

  await server.start();

  return server;
};

init().then((server) => {
  server.plugins.openapi.setHost(server.info.host + ':' + server.info.port);
  console.log(`Server running at: ${server.info.uri}`);

  server.log(['info'], `Server running on ${server.info.host}:${server.info.port}`);
});
