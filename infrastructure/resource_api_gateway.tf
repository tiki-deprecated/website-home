resource "aws_api_gateway_rest_api" "signup" {
  name = "Signup"

  tags = {
    Environment = local.global_tag_environment
    Service     = local.global_tag_service
  }
}

resource "aws_api_gateway_resource" "signup" {
  rest_api_id = aws_api_gateway_rest_api.signup.id
  parent_id   = aws_api_gateway_rest_api.signup.root_resource_id
  path_part   = "signup"
}

resource "aws_api_gateway_resource" "user" {
  rest_api_id = aws_api_gateway_rest_api.signup.id
  parent_id   = aws_api_gateway_resource.signup.id
  path_part   = "user"
}

resource "aws_api_gateway_method" "post_user" {
  rest_api_id   = aws_api_gateway_rest_api.signup.id
  resource_id   = aws_api_gateway_resource.user.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "lambda" {
  rest_api_id = aws_api_gateway_rest_api.signup.id
  resource_id = aws_api_gateway_method.post_user.resource_id
  http_method = aws_api_gateway_method.post_user.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.example.invoke_arn
}

resource "aws_api_gateway_deployment" "signup" {
  depends_on = [
    aws_api_gateway_integration.lambda
  ]

  rest_api_id = aws_api_gateway_rest_api.signup.id
  stage_name  = local.global_tag_environment
}

output "api_url" {
  value = aws_api_gateway_deployment.signup.invoke_url
}
