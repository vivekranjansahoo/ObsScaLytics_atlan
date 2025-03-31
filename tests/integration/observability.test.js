const request = require('supertest');
const app = require('../src/app');

describe('Observability API', () => {
  it('should fetch system metrics', async () => {
    const res = await request(app).get('/metrics');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('cpu_usage');
  });
});
