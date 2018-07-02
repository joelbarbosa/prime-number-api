import isRequired from 'utils/isRequired';
import Log from 'config/log';

/**
 * routes configurations
 * @param {ApplicationService} app
 */
const init = (app = isRequired()) => {
  const routesApis = [];
  app.get('/', (req, res) => {
    console.log('Ola Mundo')
  });
}

export default init;
