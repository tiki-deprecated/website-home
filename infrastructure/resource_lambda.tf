variable "aws_iam_role_lambda_exec" {}

data "aws_iam_role" "lambda_exec" {
  name = var.aws_iam_role_lambda_exec
}

resource "aws_lambda_function" "signup_user_post" {
  function_name = "functions/user/post"

  s3_bucket = aws_s3_bucket.backend.bucket
  s3_key    = "${local.global_functions_version_pipe}/src.zip"

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

  role = data.aws_iam_role.lambda_exec.arn
}
