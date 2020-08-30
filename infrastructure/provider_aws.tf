variable "aws_region" { default = "us-east-1" }

provider "aws" {
  region = var.aws_region
}

output "aws_region" {
  value = var.aws_region
}
