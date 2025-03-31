## Observability Guide

### Overview
This guide explains how OpenTelemetry is integrated into the Atlan Observability system for logging, tracing, and metrics collection.

### Installation
To use OpenTelemetry in this project, install the required dependencies:

```sh
npm install @opentelemetry/api @opentelemetry/node @opentelemetry/tracing
```

### Instrumentation Setup
Modify your service to integrate OpenTelemetry.

```js
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { ConsoleSpanExporter } = require('@opentelemetry/exporter-console');

const provider = new NodeTracerProvider();
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
provider.register();

console.log("OpenTelemetry tracing initialized...");
```

### Exporting Data to Jaeger
Jaeger is used to collect and visualize traces.

#### Step 1: Run Jaeger locally
```sh
docker run -d --name jaeger \
  -p 16686:16686 -p 4317:4317 -p 4318:4318 \
  jaegertracing/all-in-one:latest
```

#### Step 2: Configure OpenTelemetry Exporter
Modify your service to export traces:

```js
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');

const exporter = new JaegerExporter({
  serviceName: 'observability-service',
  endpoint: 'http://localhost:4317',
});

provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
console.log("Jaeger Exporter configured...");
```

### Metrics Collection
To enable OpenTelemetry metrics collection:

```js
const { MeterProvider } = require('@opentelemetry/sdk-metrics-base');

const meter = new MeterProvider().getMeter('observability-meter');
const requestCount = meter.createCounter('requests_count');

function handleRequest() {
  requestCount.add(1);
}
```

### Logging with OpenTelemetry
Use structured logging for better insights:

```js
const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ALL);
console.log("OpenTelemetry logging enabled...");
```

---
