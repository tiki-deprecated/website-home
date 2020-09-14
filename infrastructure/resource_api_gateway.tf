variable "aws_api_gateway_servers_url" { default = "" }

resource "aws_api_gateway_domain_name" "api" {
  certificate_arn = aws_acm_certificate_validation.acm_validate.certificate_arn
  domain_name     = "api.${data.aws_route53_zone.website.name}"
}

resource "aws_api_gateway_rest_api" "signup" {
  name = "Signup"

  body = local.global_oas_file

  tags = {
    Environment = var.global_tag_environment
    Service     = var.global_tag_service
  }
}

resource "aws_api_gateway_deployment" "signup" {
  rest_api_id = aws_api_gateway_rest_api.signup.id
  stage_name  = lower(var.global_tag_environment)

  triggers = {
    oas_hash = md5(local.global_oas_file)
  }
}

resource "aws_api_gateway_base_path_mapping" "signup" {
  api_id      = aws_api_gateway_rest_api.signup.id
  stage_name  = aws_api_gateway_deployment.signup.stage_name
  domain_name = aws_api_gateway_domain_name.api.domain_name
}

output "api_url" {
  value = aws_api_gateway_deployment.signup.invoke_url
}

output "api_id" {
  value = aws_api_gateway_deployment.signup.rest_api_id
}

output "api_stage" {
  value = aws_api_gateway_deployment.signup.stage_name
}
