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
 * @param {Array} middlewares to deploy application
 */
const deploy = middlewares => appService(express())(middlewares);

const app = deploy([
  compression,
  cors,
  () => bodyParser.urlencoded({ extended: true }),
  bodyParser.json,
  queryParse,
  cookieParser,
  helmet,
  () => new PrimeErrorHandle()._genericErrorHandle(),
]);

callChainFunctions(Array(routes.init(app, express.Router)))
  .catch(reason => new PrimeErrorHandle('Error on start application')._logConsole(reason));

export default app;
