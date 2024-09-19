const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import your Express app

let server;

describe('Integration Testing', () => {
  before((done) => {
    server = app.listen(7865, done); // Start the server
  });

  after((done) => {
    server.close(done); // Stop the server after tests
  });

  describe('GET /', () => {
    it('Code: 200 | Body: Welcome to the payment system', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});
