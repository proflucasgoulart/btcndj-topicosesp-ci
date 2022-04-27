const supertest = require('supertest');

const request = supertest('http://localhost:5678');

test('Servidor na porta 5678', async () => {
  const resposta = await request.get('/');
  expect(resposta.status).toBe(200);
});
