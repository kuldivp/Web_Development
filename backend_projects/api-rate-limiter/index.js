// index.js
class RateLimiter {
    constructor(options) {
      this.requests = {};  // In-memory store of IPs and their request counts
      this.windowSizeInHours = options.windowSizeInHours || 1;  // Time window
      this.maxRequests = options.maxRequests || 100;  // Max requests per window
    }
  
    limit(req, res, next) {
      const ip = req.ip;  // Get the user's IP address
      const currentTime = Date.now();
  
      if (!this.requests[ip]) {
        this.requests[ip] = { count: 1, startTime: currentTime };
      } else {
        const timeElapsed = (currentTime - this.requests[ip].startTime) / (1000 * 60 * 60);
        
        // Reset count after window expires
        if (timeElapsed > this.windowSizeInHours) {
          this.requests[ip].count = 1;
          this.requests[ip].startTime = currentTime;
        } else {
          this.requests[ip].count += 1;
        }
      }
  
      // Checking  if user exceeded the request limit
      if (this.requests[ip].count > this.maxRequests) {
        return res.status(429).json({ message: "Too many requests, please try again later." });
      }
      
      next();  // it will Allow request to proceed if within limit
    }
  }
  
  module.exports = RateLimiter;
  