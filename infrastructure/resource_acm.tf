resource "aws_acm_certificate" "ssl" {
  domain_name               = var.global_website_domain
  subject_alternative_names = ["www.${var.global_website_domain}"]
  validation_method         = "DNS"

  tags = {
    Environment = var.global_tag_environment
    Service     = var.global_tag_service
  }

  lifecycle {
    create_before_destroy = true
  }
}
