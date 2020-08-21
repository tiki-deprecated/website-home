variable "s3_bucket_name" {
  description = "The S3 bucket name. Must be unique. Naming convention is tiki-[xyz]"
}

resource "aws_s3_bucket" "static_site" {
  bucket = var.s3_bucket_name
  acl    = "private"

  tags = {
    Environment = "Internal"
    Service     = "site"
  }
}
