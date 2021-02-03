variable "global_log_bucket" {}
variable "global_dynamodb_table_name" {}
variable "global_bucket_prefix" {}
variable "global_tag_environment" { default = "Production" }
variable "global_tag_service" { default = "Website" }
variable "global_website_domain" { default = "mytiki.com" }
variable "global_sendgrid_api_key" {}

locals {
  global_bucket_frontend = "${var.global_bucket_prefix}-frontend-${lower(var.global_tag_environment)}"
  global_bucket_backend  = "${var.global_bucket_prefix}-backend-${lower(var.global_tag_environment)}"

  global_functions_version      = file(local.global_functions_version_path)
  global_functions_version_pipe = replace(local.global_functions_version, ".", "-")
  global_functions_version_path = "${path.module}/files/functions.version"
  global_functions_zip_path     = "${path.module}/files/functions.zip"

  global_api_version        = file(local.global_api_version_path)
  global_api_version_pipe   = replace(local.global_api_version, ".", "-")
  global_api_version_path   = "${path.module}/files/api.version"
  global_frontend_dist_path = "${path.module}/files/dist/"
  global_oas_path           = "${path.module}/files/oas.json"

  global_oas_file = templatefile(local.global_oas_path,
    {
      lambda_signup_arn   = aws_lambda_function.signup.invoke_arn,
      lambda_opt_in_arn   = aws_lambda_function.opt_in.invoke_arn,
      lambda_count_arn   = aws_lambda_function.count.invoke_arn,
      servers_url  = "api.${var.global_website_domain}",
      region       = var.aws_region,
      version      = local.global_api_version,
      version_pipe = local.global_api_version_pipe
    }
  )
}
