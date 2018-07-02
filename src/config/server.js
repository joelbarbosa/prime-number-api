import app from './app';
import { onListening, onError } from './listen_server';
import http from 'http';

const server = http.createServer(app()).listen(process.env.PORT);

server.on('listening', () => onListening(server.address()));
server.on('error', onError);

export default server;
