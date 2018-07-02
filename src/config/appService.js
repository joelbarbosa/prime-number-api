import configServer from './configServer';
import isRequired from '../utils/isRequired';

/**
 * instance your service provider.
 * ex: express, hapi, etc...
 * @param {Service} server
 * @augments {Array} middlewares
 */
const appService = (server = isRequired()) => {
  return function(middlewares) {
    if (middlewares) {
      return configServer(server, ...middlewares);
    }
    return server;
  }
}

export default appService;
