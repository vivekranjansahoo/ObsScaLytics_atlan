# Atlan Observability

## Overview
Atlan Observability is a comprehensive monitoring and debugging solution designed to improve system reliability, streamline debugging, and enhance performance monitoring. This project integrates logging, metrics, tracing, and real-time alerting to provide a **centralized** and **scalable** observability framework.

## Features
- **Centralized Logging:** Efficient log aggregation, filtering, and analysis.
- **Metrics Collection:** Real-time system health and performance monitoring.
- **Distributed Tracing:** End-to-end request tracking across microservices.
- **Real-time Alerts:** Immediate detection of system anomalies and failures.
- **Automated Deployment:** Infrastructure as Code (IaC) using Terraform and Kubernetes.
- **Testing Framework:** Unit and integration tests for observability components.

## Folder Structure
```
📦 atlan-observability
 ┣ 📂 src                  # Source code for observability services
 ┃ ┣ 📂 logs               # Log processing microservice
 ┃ ┣ 📂 metrics            # Metrics collection service
 ┃ ┣ 📂 traces             # Distributed tracing implementation
 ┃ ┗ 📂 alerts             # Real-time alerting system
 ┣ 📂 docs                 # High-level design, API contracts, and use cases
 ┣ 📂 infra                # Terraform/K8s scripts for deployment
 ┣ 📂 scripts              # Automation scripts for log ingestion & alert testing
 ┣ 📂 tests                # Unit & integration tests
 ┣ 📜 README.md            # Full documentation with diagrams & use cases
 ┣ 📜 architecture.md       # Deep dive into system design
 ┣ 📜 observability-guide.md # Explanation of OpenTelemetry integration

```

## API Example
**Endpoint:** `GET /metrics`
```json
{
  "cpu_usage": "45%",
  "memory_usage": "70%",
  "request_rate": "150 req/sec"
}
```

**Endpoint:** `POST /logs`
```json
{
  "service": "user-service",
  "level": "error",
  "message": "Database connection failed"
}
```

**Endpoint:** `GET /traces/{trace_id}`
```json
{
  "trace_id": "abc123",
  "spans": [
    {
      "service": "api-gateway",
      "duration_ms": 120,
      "timestamp": "2025-03-30T12:00:00Z"
    },
    {
      "service": "auth-service",
      "duration_ms": 250,
      "timestamp": "2025-03-30T12:00:01Z"
    }
  ]
}

```
## Architecture
[architecture.md](architecture.md)

## Observability-guide
[observability-guide.md](observability-guide.md)

## Deployment
```sh
# Deploy using Docker Compose
$ docker-compose up -d

# Deploy on Kubernetes
$ kubectl apply -f infra/k8s-deployment.yaml (Sample)
```

## Testing
```sh
# Run unit tests
$ npm test

# Run integration tests
$ npm run test:integration (Sample)
```


## License
This project is licensed under the MIT License.
