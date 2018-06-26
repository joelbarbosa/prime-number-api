import express from 'express';
import expressConfig from './express-config';
import routes from './routes';

const app = express();

const expressServices = [
  expressConfig(app),
  routes.init(app)
];
