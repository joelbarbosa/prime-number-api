import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';
import fs from 'fs';
const env = process.env.NODE_ENV || 'development';
const logDir = 'log';

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

const tsFormat = () => (new Date()).toLocaleTimeString();
const Log = new (winston.Logger) ({
  transports: [
    new (winston.transports.Console) ({
      timestamp: tsFormat,
      colorize: true,
      level: 'info'
    }),
    new (winstonDaily) ({
      filename: `${logDir}/-messagebird.log`,
      timestamp: tsFormat,
      datePattern: 'yyyy-MM-dd',
      prepend: true,
      level: env === 'development' ? 'verbose' : 'info'
    })
  ]
});
Log.level = 'debug';

export default Log;
