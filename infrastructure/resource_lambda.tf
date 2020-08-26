variable "aws_iam_role_lambda_exec" { }

data "aws_iam_role" "lambda_exec" {
  name = var.aws_iam_role_lambda_exec
}

resource "aws_lambda_function" "example" {
  function_name = "ServerlessExample"

  s3_bucket = local.aws_s3_bucket_backend
  s3_key    = "v1.0.0/example.zip"

  handler = "main.handler"
  runtime = "nodejs12.x"

  tags = {
    Environment = local.global_tag_environment
    Service     = local.global_tag_service
  }

  role = data.aws_iam_role.lambda_exec.arn
}

resource "aws_lambda_permission" "apigw" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.example.function_name
  principal     = "apigateway.amazonaws.com"

  # The "/*/*" portion grants access from any method on any resource
  # within the API Gateway REST API.
  source_arn = "${aws_api_gateway_rest_api.example.execution_arn}/*/*"
}
