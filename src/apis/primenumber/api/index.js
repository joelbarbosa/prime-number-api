import RoutesAdapter from 'config/routes_adapter';
import { isPrime } from '../service/primeNumberService';

/**
 * primeNumberApi rest api
 * @version v1
 * @name /primenumber
 *
 * @param {Object} Aplication Service
 * @param {Object} Options initialzation
*/
const primeNumberApi = (app, opt = { enpoint: '/primenumber', version: '/v1'}) => {

  /**
   * @api {get} /primenumber/is_prime?number pass number
   *
   * @apiDescription test if number is prime
   *
   * @apiVersion 0.0.1
   * @apiName /primenumber
   *
   * @apiParam {Number} number
   * @apiSuccess {Boolean} Boolean true/false if number is prime.
   */
  app.get(`${opt.version}${opt.enpoint}/is_prime`, async (req, res) => {
    const { number } = req.query;
    if (!number) {
      return RoutesAdapter(req, res)
        .errorResponse(400, `client error: ${number} is not valid`);
    }
    await RoutesAdapter(req, res).asyncResponse(isPrime(number));
  });

  app.get(`${opt.version}${opt.enpoint}/next_prime`, async (req, res) => {
    const { number } = req.query;
    if (!number) {
      return RoutesAdapter(req, res)
        .errorResponse(400, `client error: ${number} is not valid`);
    }
    await RoutesAdapter(req, res).asyncResponse(isPrime(number));
  });
}

export default primeNumberApi;
