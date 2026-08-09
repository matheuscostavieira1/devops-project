const request = require('supertest');
const app = require('../app');

describe('Testes da API', () => {

  it('GET / deve responder', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  it('GET /users deve retornar lista', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});