import request from 'supertest';
import app from 'config/app';

describe("Test application is working", () => {
  test("GET / should be response with json", (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done());
  });
});
