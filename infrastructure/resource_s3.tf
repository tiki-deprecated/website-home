variable "aws_s3_bucket" { }

resource "aws_s3_bucket" "static_site" {
  bucket = var.aws_s3_bucket
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

output "arn" {
  value = aws_s3_bucket.static_site.arn
}
