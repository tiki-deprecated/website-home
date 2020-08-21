variable "aws_s3_bucket" { }

resource "aws_s3_bucket" "static_site" {
  bucket = var.aws_s3_bucket

  tags = {
    Environment = var.global_tag_environment
    Service     = var.global_tag_service
  }

  website {
    index_document = "index.html"
    error_document = "404.html"
  }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
}

data "aws_s3_bucket" "static_site_complete" {
  bucket = var.aws_s3_bucket
  depends_on = [
    aws_s3_bucket.static_site,
  ]
}

resource "aws_s3_bucket_public_access_block" "off" {
  bucket = data.aws_s3_bucket.static_site_complete.bucket
  block_public_acls       = false
  ignore_public_acls      = false
  block_public_policy     = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "static_site" {
  bucket = data.aws_s3_bucket.static_site_complete.bucket
  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
      {
          "Sid": "PublicReadGetObject",
          "Effect": "Allow",
          "Principal": "*",
          "Action": "s3:GetObject",
          "Resource": "arn:aws:s3:::${var.aws_s3_bucket}/*"
      }
  ]
}
EOF
  depends_on = [
    aws_s3_bucket_public_access_block.off,
  ]
}

resource "aws_s3_bucket_public_access_block" "on" {
  bucket = data.aws_s3_bucket.static_site_complete.bucket
  block_public_acls       = true
  ignore_public_acls      = true
  block_public_policy     = true
  restrict_public_buckets = false
  depends_on = [
    aws_s3_bucket_policy.static_site,
  ]
}

resource "aws_s3_bucket_metric" "static-site" {
  bucket = data.aws_s3_bucket.static_site_complete.bucket
  name   = "EntireBucket"
}

output "arn" {
  value = aws_s3_bucket.static_site.website_endpoint
}
