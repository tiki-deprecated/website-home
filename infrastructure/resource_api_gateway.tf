resource "aws_api_gateway_domain_name" "signup" {
  certificate_arn = aws_acm_certificate_validation.acm_validate.certificate_arn
  domain_name     = local.global_api_domain_name
  security_policy = "TLS_1_2"
}

resource "aws_api_gateway_rest_api" "signup" {
  name = "${local.global_bucket_backend}-signup"

  body = local.global_oas_file

  tags = {
    Environment = var.global_tag_environment
    Service     = var.global_tag_service
  }
}

resource "aws_api_gateway_deployment" "signup" {
  rest_api_id = aws_api_gateway_rest_api.signup.id

  triggers = {
    oas_hash = md5(local.global_oas_file)
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "signup" {
  deployment_id = aws_api_gateway_deployment.signup.id
  rest_api_id   = aws_api_gateway_rest_api.signup.id
  stage_name    = lower(var.global_tag_environment)
}

resource "aws_api_gateway_base_path_mapping" "signup" {
  api_id      = aws_api_gateway_rest_api.signup.id
  stage_name  = aws_api_gateway_stage.signup.stage_name
  domain_name = aws_api_gateway_domain_name.signup.domain_name
  base_path   = "api"
}

output "api_id" {
  value = aws_api_gateway_deployment.signup.rest_api_id
}

output "api_stage" {
  value = aws_api_gateway_stage.signup.stage_name
}
