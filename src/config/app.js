import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import corsOptions from './cors';
import queryParse from 'express-query-int';
import helmet from 'helmet';
import routes from './routes';

const app = null;

const expressServices = [
  //expressConfig(app),
  routes.init(app)
];
