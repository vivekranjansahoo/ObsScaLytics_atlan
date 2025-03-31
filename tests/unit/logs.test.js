const request = require('supertest');
const app = require('../src/logs/app');

describe('Logs Service', () => {
  it('should store logs successfully', async () => {
    const res = await request(app)
      .post('/logs')
      .send({ service: 'auth', level: 'info', message: 'Login successful' });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Log stored successfully');
  });
});
