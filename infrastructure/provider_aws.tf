variable "aws_provider_region" {
  description = "The AWS region"
  default = "us-east-1"
}

provider "aws" {
  region = var.aws_provider_region
}
