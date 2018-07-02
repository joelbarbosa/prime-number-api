import { app } from './app';
import http from 'http';

const server = http.createServer(app)
  .listen(normalizeToDecimal(process.env.PORT));

  /**
 * Listen on provided all network interfaces.
*/
server.on('listening', () => onListening(server.address()));
server.on('error', onError);

export default server;
