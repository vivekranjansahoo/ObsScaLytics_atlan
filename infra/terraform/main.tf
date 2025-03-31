provider "aws" {
  region = "us-east-1"
}

resource "aws_ecs_cluster" "atlan_cluster" {
  name = "atlan-observability-cluster"
}

resource "aws_ecs_task_definition" "observability_service" {
  family                   = "atlan-service"
  container_definitions    = jsonencode([
    {
      name  = "logs-service",
      image = "your-repo/logs-service:latest",
      cpu   = 256,
      memory = 512,
      networkMode = "bridge"
    }
  ])
}
