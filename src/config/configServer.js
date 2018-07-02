import isRequired from 'utils/isRequired';

/**
 * Middleware configuration for application server
 * @param {server} appServer Application service some like: express, hapi, etc...
 */
const configServer = (appServer = isRequired(), ...fns) => {
  fns.forEach(fn => appServer.use(fn()));
  return appServer;
}

export default configServer;
