import isRequired from '../utils/isRequired';

/**
 * routes configurations
 * @param {ApplicationService} app
 */
const init = (app) => {
  app.get('/', (req, res) => {
    return res.status(200).json({ app: 'WORKING...' });
  });
}

export default { init };
