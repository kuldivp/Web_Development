# Rate Limiter

A simple npm package for API rate limiting based on IP addresses.

## Installation

To install the package, run:

### how to use this package in your project
```bash
const RateLimiter = require('rate-limiter');

const limiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

// Apply the rate limiter to your API routes
app.use(limiter);
