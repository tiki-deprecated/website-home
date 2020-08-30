variable "aws_api_gateway_servers_url" { default = "" }

resource "aws_api_gateway_rest_api" "signup" {
  name = "Signup"

  triggers = {
    oas_change = md5(local.global_oas_file)
  }

  body = local.global_oas_file

  tags = {
    Environment = local.global_tag_environment
    Service     = local.global_tag_service
  }
}

resource "aws_api_gateway_deployment" "signup" {
  rest_api_id = aws_api_gateway_rest_api.signup.id
  stage_name  = lower(local.global_tag_environment)
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
