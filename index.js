const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => res.send(`
  <h1>Hello World!</h1>
  <a href="/about"><button>About</button></a>
  <a href="/health"><button>Health</button></a>
`));

app.get('/about', (req, res) => res.send('This is the about page.'));

app.get('/health', (req, res) => res.json({ status: 'ok', date: new Date().toISOString() }));

app.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

app.get('/error', (req, res) => { throw new Error('Test error'); });

// 404 handler for unknown routes
app.use((req, res, next) => {
  res.status(404).send('404 Not Found: The page you are looking for does not exist.');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 Internal Server Error: Something went wrong!');
});

module.exports = app;
