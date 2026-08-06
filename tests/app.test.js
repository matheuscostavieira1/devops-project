const request = require('supertest');
const app = require('../app');

describe('Testes da API', () => {
  it('GET / deve retornar 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  it('GET /health deve retornar OK', async () => {
    const res = await request(app).get('/health');
    expect(res.body.status).toBe('OK');
  });
});