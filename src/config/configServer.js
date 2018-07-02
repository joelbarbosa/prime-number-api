/**
 * Base configuration for application server
 * @param {server} appServer Application service some like: express, hapi, etc...
 */
const configServer = (appServer, ...fns) => fns.forEach(fn => appServer.use(fn()))

export default configServer;
