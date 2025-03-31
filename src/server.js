import express from 'express';
import logger from './src/logs/logger.js';
import { register, httpRequestDurationMicroseconds } from './src/metrics/metrics.js';
import tracer from './src/traces/tracing.js';
import sendAlert from './src/alerts/alertService.js';

const app = express();

// Middleware for observability
app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    httpRequestDurationMicroseconds
      .labels(req.method, req.path, res.statusCode)
      .observe(duration);

    logger.info({ method: req.method, path: req.path, status: res.statusCode, duration });

    if (res.statusCode >= 500) {
      sendAlert(`🚨 High error rate detected: ${req.method} ${req.path} returned ${res.statusCode}`);
    }
  });

  const span = tracer.startSpan(`HTTP ${req.method} ${req.path}`);
  req.span = span;
  
  res.on('finish', () => span.end());
  
  next();
});

// Expose metrics for Prometheus
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.get('/', (req, res) => res.send('Atlan Observability Running!'));

app.listen(3000, () => logger.info('🚀 Server running on port 3000'));
