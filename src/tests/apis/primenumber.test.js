import request from 'supertest';
import app from 'config/app';

describe("Test primenumber api endpoint", () => {
  test("GET /v1/primenumber/is_prime?number=:number should be validate is prime", (done) => {
    request(app)
      .get('/v1/primenumber/is_prime?number=5')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .then(response => {
        expect(response.status).toBe(200);
        expect(response.body).toEqual({"data": true});
        done();
      })
  });
  test("GET /v1/primenumber/next_prime?number=:number should be generate next prime", (done) => {
    request(app)
      .get('/v1/primenumber/next_prime?number=593')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .then(response => {
        expect(response.status).toBe(200);
        expect(response.body).toBe(599);
        done();
      })
  });
});
