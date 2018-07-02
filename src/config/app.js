import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import corsOptions from './cors';
import queryParse from 'express-query-int';
import helmet from 'helmet';
import routes from './routes';
import appFactory from '../config/appFactory';
import PrimeNumberErrorHandle from '../utils/PrimeNumberErrorHandle';
import { callChainFunctions } from '../utils/functions_util';

const app = appFactory(express());

const middlewares = () => app([
  compression(),
  cors(corsOptions),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
  queryParse(),
  cookieParser(),
  helmet()
]);

const servicesbyPriority = [
  middlewares,
  routes.init(app)
]

callChainFunctions(servicesbyPriority)
  .catch(reason => {
    new PrimeNumberErrorHandle('Error on start application')
      ._logConsole(reason);
  });

export default app;
