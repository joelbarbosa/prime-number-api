import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import corsOptions from './cors';
import queryParse from 'express-query-int';
import helmet from 'helmet';
import isRequired from 'utils/isRequired';

const expressConfig = (express = isRequired()) => {
  express.use(compression());
  express.use(cors(corsOptions));
  express.use(bodyParser.urlencoded({ extended: true }));
  express.use(bodyParser.json());
  express.use(queryParse());
  express.use(cookieParser());
  express.use(helmet());
}

export default expressConfig;
