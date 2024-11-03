// app.js
const express = require('express');
const RateLimiter = require('./index.js');
const app = express();

// Create an instance of the rate limiter
const limiter = new RateLimiter({ windowSizeInHours: 1, maxRequests: 10 });

// Apply rate limiter to all routes
app.use((req, res, next) => limiter.limit(req, res, next));

app.get('/', (req, res) => {
  res.send("Hello, you haven't hit the limit!");
});
//listning
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
