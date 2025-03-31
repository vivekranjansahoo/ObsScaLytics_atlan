#!/bin/bash
LOG_API="http://localhost:3000/logs"

echo "Sending test logs..."
curl -X POST $LOG_API -H "Content-Type: application/json" -d '{
  "service": "user-service",
  "level": "info",
  "message": "User logged in successfully"
}'

echo "Log sent successfully!"
