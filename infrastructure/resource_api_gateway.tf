variable "aws_api_gateway_servers_url" { default = "" }

resource "aws_api_gateway_rest_api" "signup" {
  name = "Signup"

  body = templatefile(local.global_oas_path,
    {
      lambda_arn   = aws_lambda_function.signup.invoke_arn,
      env          = lower(local.global_tag_environment),
      servers_url  = var.aws_api_gateway_servers_url,
      region       = var.aws_region,
      version      = local.global_api_version,
      version_pipe = local.global_api_version_pipe
    }
  )

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
  value = aws_api_gateway_deployment.signup.id
}

output "api_stage" {
  value = aws_api_gateway_deployment.signup.stage_name
}
