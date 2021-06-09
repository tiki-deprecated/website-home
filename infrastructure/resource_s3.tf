resource "aws_s3_bucket" "frontend" {
  bucket = local.global_bucket_frontend

  tags = {
    Environment = var.global_tag_environment
    Service     = var.global_tag_service
  }

  website {
    index_document = "index.html"
    error_document = "redirect/index.html"
  }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
      {
          "Sid": "PublicReadGetObject",
          "Effect": "Allow",
          "Principal": "*",
          "Action": "s3:GetObject",
          "Resource": "arn:aws:s3:::${local.global_bucket_frontend}/*"
      }
  ]
}
EOF
}

resource "aws_s3_bucket_metric" "frontend" {
  bucket = aws_s3_bucket.frontend.bucket
  name   = "EntireBucket"
}

resource "aws_s3_bucket" "backend" {
  bucket = local.global_bucket_backend

  tags = {
    Environment = var.global_tag_environment
    Service     = var.global_tag_service
  }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
}

resource "aws_s3_bucket_public_access_block" "backend" {
  bucket = aws_s3_bucket.backend.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_object" "backend_functions" {
  bucket                 = aws_s3_bucket.backend.bucket
  key                    = "${local.global_functions_version_pipe}/src.zip"
  source                 = local.global_functions_src_path
  etag                   = filemd5(local.global_functions_src_path)
  server_side_encryption = "AES256"
}

output "s3_website" {
  value = aws_s3_bucket.frontend.website_endpoint
}
