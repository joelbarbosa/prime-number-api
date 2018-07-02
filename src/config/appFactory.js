import configServer from './configServer';
import isRequired from '../utils/isRequired';

const appFactory = (server = isRequired()) => {
  return function(middlewares) {
    if (middlewares) {
      return configServer(server, ...middlewares);
    }
    return server;
  }
}

export default appFactory;
