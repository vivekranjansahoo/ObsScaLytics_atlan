#!/bin/bash
ALERT_API="http://localhost:3000/alerts"

echo "Triggering a test alert..."
curl -X POST $ALERT_API -H "Content-Type: application/json" -d '{
  "service": "payment-service",
  "severity": "critical",
  "message": "Payment gateway failure detected"
}'

echo "Alert test completed!"
