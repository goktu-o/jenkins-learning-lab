const express = require('express');
const app = express();

app.get('/', (req, res) => res.send(`
  <h1>Hello World!</h1>
  <a href="/about"><button>About</button></a>
  <a href="/health"><button>Health</button></a>
`));

app.get('/about', (req, res) => res.send('This is the about page.'));

app.get('/health', (req, res) => res.json({ status: 'ok', date: new Date().toISOString() }));

module.exports = app;
