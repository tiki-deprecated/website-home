resource "aws_cloudfront_distribution" "website" {
  origin {
    domain_name = aws_s3_bucket.frontend.website_endpoint
    origin_id   = aws_s3_bucket.frontend.bucket

    custom_origin_config {
      http_port                = 80
      https_port               = 443
      origin_protocol_policy   = "http-only"
      origin_ssl_protocols     = ["TLSv1.2"]
      origin_keepalive_timeout = 5
      origin_read_timeout      = 30
    }
  }

  enabled         = true
  is_ipv6_enabled = true

  logging_config {
    include_cookies = false
    bucket          = "${var.global_log_bucket}.s3.amazonaws.com"
    prefix          = "CloudFront/"
  }

  aliases = ["www.${var.global_website_domain}", var.global_website_domain]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = aws_s3_bucket.frontend.bucket

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 1
    default_ttl            = 86400
    max_ttl                = 31536000
  }

  price_class = "PriceClass_All"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    Environment = var.global_tag_environment
    Service     = var.global_tag_service
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.ssl.arn
    minimum_protocol_version = "TLSv1.2_2019"
    ssl_support_method       = "sni-only"
  }

  wait_for_deployment = false
}

output "cloudfront_domain" {
  value = aws_cloudfront_distribution.website.domain_name
}
