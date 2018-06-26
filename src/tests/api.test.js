import request from 'supertest';
import app from 'prime-api';

describe("Test application is working", () => {
  it("GET / should be response with json", (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done());
  });
});
