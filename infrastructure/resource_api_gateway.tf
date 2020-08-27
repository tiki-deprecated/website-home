variable "aws_api_gateway_servers_url" { default = "" }

resource "aws_api_gateway_rest_api" "signup" {
  name = "Signup"

  body = templatefile("../backend/oas.json",
    {
      lambda_arn  = aws_lambda_function.example.invoke_arn,
      env         = lower(local.global_tag_environment),
      servers_url = var.aws_api_gateway_servers_url,
      region      = var.aws_region
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
