data "aws_iam_role" "lambda_exec" {
  name = var.global_role_lambda_exec
}

resource "aws_lambda_function" "signup_user_post" {
  function_name = "${local.global_bucket_backend}-signup-user-post"

  s3_bucket = aws_s3_bucket.backend.bucket
  s3_key = aws_s3_bucket_object.backend_functions.key
  package_type = "Zip"

  handler = "functions/user/post.handler"
  runtime = "nodejs14.x"

  tags = {
    Environment = var.global_tag_environment
    Service = var.global_tag_service
  }

  environment {
    variables = {
      SENDGRID_API_KEY = var.global_sendgrid_api_key
    }
  }

  source_code_hash = base64sha256(local.global_functions_src_path)
  role = data.aws_iam_role.lambda_exec.arn
}

resource "aws_lambda_permission" "signup_user_post" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.signup_user_post.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.signup.execution_arn}/*/*"
}

resource "aws_lambda_function" "signup_user_get" {
  function_name = "${local.global_bucket_backend}-signup-user-get"

  s3_bucket = aws_s3_bucket.backend.bucket
  s3_key = aws_s3_bucket_object.backend_functions.key
  package_type = "Zip"

  handler = "functions/user/get.handler"
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

  source_code_hash = base64sha256(local.global_functions_src_path)
  role = data.aws_iam_role.lambda_exec.arn
}

resource "aws_lambda_permission" "signup_user_get" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.signup_user_get.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.signup.execution_arn}/*/*"
}
