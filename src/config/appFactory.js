import configServer from './configServer';
import isRequired from '../utils/isRequired';

const appFactory = (server = isRequired()) => {
  return function(configFns) {
    if (configFns) {
      return configServer(server, ...configFns);
    }
    return server;
  }
}

export default appFactory;
