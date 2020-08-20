provider "aws" {
  region = "us-east-1"
  profile = "tiki"
}

resource "aws_s3_bucket" "static_site" {
  bucket = var.s3_bucket_name
  acl    = "private"

  tags = {
    Environment = "Internal"
    Service     = "site"
  }
}
