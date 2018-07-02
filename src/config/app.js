import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import queryParse from 'express-query-int';
import helmet from 'helmet';
import routes from './routes';
import appService from './appService';
import PrimeErrorHandle from '../utils/PrimeErrorHandle';
import { callChainFunctions } from '../utils/functions_utils';

/**
 * Instantiate application service
 */
const app = appService(express());

const appWithMiddleware = () => app([
  compression,
  cors,
  () => bodyParser.urlencoded({ extended: true }),
  bodyParser.json,
  queryParse,
  cookieParser,
  helmet,
  () => new PrimeErrorHandle()._genericErrorHandle()
]);

const initApplicationByPriority = [
  routes.init(appWithMiddleware())
];

callChainFunctions(initApplicationByPriority)
  .catch(reason => new PrimeErrorHandle('Error on start application')._logConsole(reason));

export default app;
