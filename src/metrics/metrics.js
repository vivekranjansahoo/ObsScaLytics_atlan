import client from 'prom-client';

// Create a Prometheus registry
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Define a custom metric for API response times
const httpRequestDurationMicroseconds = new client.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [50, 100, 200, 500, 1000, 2000, 5000] 
});

register.registerMetric(httpRequestDurationMicroseconds);

export { register, httpRequestDurationMicroseconds };
