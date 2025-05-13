const request = require('supertest');
const express = require('express');

// Import your app or create a simple one for demonstration
let app;
try {
  app = require('./index');
} catch (e) {
  // fallback: create a simple express app if index.js does not export
  app = express();
  app.get('/', (req, res) => res.send('Hello World!'));
}

describe('GET /', () => {
  it('should respond with 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});

describe('GET /about', () => {
  it('should respond with 200 OK and about message', async () => {
    const res = await request(app).get('/about');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('This is the about page.');
  });
});

describe('GET /health', () => {
  it('should respond with 200 OK and health status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body.date).toBeDefined();
  });
});

describe('POST /echo', () => {
  it('should respond with the same JSON data sent', async () => {
    const payload = { message: 'Hello, Jenkins!' };
    const res = await request(app).post('/echo').send(payload);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ received: payload });
  });
});
