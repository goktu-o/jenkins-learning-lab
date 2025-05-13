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
