data "aws_route53_zone" "website" {
  name = var.global_website_zone
}

resource "aws_route53_record" "this_a" {
  zone_id = data.aws_route53_zone.website.zone_id
  name    = var.global_website_domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "www" {
  zone_id = data.aws_route53_zone.website.zone_id
  name    = "www.${var.global_website_domain}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "signup" {
  zone_id = data.aws_route53_zone.website.id
  name    = aws_api_gateway_domain_name.signup.domain_name
  type    = "A"

  alias {
    evaluate_target_health = true
    name                   = aws_api_gateway_domain_name.signup.cloudfront_domain_name
    zone_id                = aws_api_gateway_domain_name.signup.cloudfront_zone_id
  }
}

//noinspection HILUnresolvedReference
resource "aws_route53_record" "acm_validate" {
  for_each = {
    for dvo in aws_acm_certificate.ssl.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.website.zone_id
}
