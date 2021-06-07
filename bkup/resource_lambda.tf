variable "aws_iam_role_lambda_exec" {}

data "aws_iam_role" "lambda_exec" {
  name = var.aws_iam_role_lambda_exec
}

resource "aws_lambda_function" "signup_user_post" {
  function_name = "Signup"

  s3_bucket = aws_s3_bucket.backend.bucket
  s3_key    = "${local.global_functions_version_pipe}/functions.zip"

  handler = "signup.handler"
  runtime = "nodejs12.x"

  tags = {
    Environment = var.global_tag_environment
    Service     = var.global_tag_service
  }

  environment {
    variables = {
      SENDGRID_API_KEY = var.global_sendgrid_api_key
    }
  }

  source_code_hash = filemd5(local.global_functions_zip_path)

  role = data.aws_iam_role.lambda_exec.arn
}

resource "aws_lambda_function" "signup_user_get" {
  function_name = "Count"

  s3_bucket = aws_s3_bucket.backend.bucket
  s3_key    = "${local.global_functions_version_pipe}/functions.zip"

  handler = "count.handler"
  runtime = "nodejs12.x"

  tags = {
    Environment = var.global_tag_environment
    Service     = var.global_tag_service
  }

  environment {
    variables = {
      DYNAMODB_TABLE = var.global_dynamodb_table_name,
      SENDGRID_API_KEY = var.global_sendgrid_api_key
    }
  }

  source_code_hash = filemd5(local.global_functions_zip_path)

  role = data.aws_iam_role.lambda_exec.arn
}

resource "aws_lambda_permission" "signup_api" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.signup.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.signup.execution_arn}/*/*"
}

resource "aws_lambda_permission" "opt_in_api" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.opt_in.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.signup.execution_arn}/*/*"
}

resource "aws_lambda_permission" "count_api" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.count.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.signup.execution_arn}/*/*"
}
