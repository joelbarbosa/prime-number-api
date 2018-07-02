import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import corsOptions from './cors';
import queryParse from 'express-query-int';
import helmet from 'helmet';
import routes from './routes';
import appService from './appService';
import PrimeErrorHandle from 'utils/PrimeErrorHandle';
import {
  callParallelFunctions,
  callChainFunctions
} from 'utils/functions_utils';

/**
 * Instantiate application service
 */
const app = appService(express());

const startMiddlewares = () => app([
  compression(),
  cors(corsOptions),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
  queryParse(),
  cookieParser(),
  helmet(),
  new PrimeErrorHandle()._genericErrorHandle()
]);

const initApplicationByPriority = [
  startMiddlewares(),
  routes.init(app)
];

callChainFunctions(initApplicationByPriority)
  .catch(reason => {
    new PrimeErrorHandle('Error on start application')
      ._logConsole(reason);
  });

export default app;
