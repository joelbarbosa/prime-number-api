import RoutesAdapter from 'config/routes_adapter';
import { isPrime, findNextPrime } from '../service/primeNumberService';

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
   * @api {get} /primenumber/is_prime?number=:number
   *
   * @apiDescription test if number is prime
   *
   * @apiVersion 0.0.1
   * @apiName /primenumber/is_prime
   *
   * @apiParam (Query Number) {Number} number
   * @apiSuccess {Boolean} Boolean true/false if number is prime.
   */
  app.get(`${opt.version}${opt.enpoint}/is_prime`, async (req, res) => {
    const { number } = req.query;
    if (!number) {
      return await RoutesAdapter(req, res)
        .errorResponse(400, `client error: ${number} is not valid`);
    }
    return await RoutesAdapter(req, res)
    .asyncResponse({
      data: isPrime(number)
    });
  });

  /**
   * @api {get} /primenumber/next_prime?number=:number
   *
   * @apiDescription generate next prime number
   *
   * @apiVersion 0.0.1
   * @apiName /primenumber/next_prime
   *
   * @apiParam (Query Number) {Number} number
   * @apiSuccess {Number} next prime number
  */
  app.get(`${opt.version}${opt.enpoint}/next_prime`, async (req, res) => {
    const { number } = req.query;
    if (!number) {
      return RoutesAdapter(req, res)
        .errorResponse(400, `client error: ${number} is not valid`);
    }
    if(!isPrime(number)) {
      return RoutesAdapter(req, res)
      .errorResponse(400, `${number} is not prime number`);
    }
    return await RoutesAdapter(req, res).asyncResponse(findNextPrime(number));
  });
}

export default primeNumberApi;
