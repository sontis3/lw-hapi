'use strict';

const Hapi = require('hapi');
const HapiOpenAPI = require('hapi-openapi');
const Path = require('path');

const init = async function () {
  const server = new Hapi.Server({
    host: 'localhost',
    port: 3000
  });

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
