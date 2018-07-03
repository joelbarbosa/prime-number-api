import genericApi from '../apis/api'
import primeNumberApi from '../apis/primenumber/api'
import { callParallelFunctions } from 'utils/functions_utils';
import isRequired from '../utils/isRequired';

/**
 * routes configurations
 * @param {ApplicationService} app
 */
const init = (app = isRequired()) => {

  const allRoutesApis = [
    genericApi(app),
    primeNumberApi(app)
  ];

  callParallelFunctions(allRoutesApis)
    .catch(error => {
      Log.warn(`Some api has not been working: ${error}`);
    });
}

export default { init };
