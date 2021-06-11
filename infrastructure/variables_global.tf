//i.e. mytiki.com
variable "global_website_zone" {}

//i.e. dev.mytiki.com
variable "global_website_domain" {}

//i.e. Production
variable "global_tag_environment" {}

//i.e. Website
variable "global_tag_service" {}

//i.e. tiki-website-logs
variable "global_bucket_logs" {}

variable "global_sendgrid_api_key" {}
variable "global_sendgrid_api_validation_key" {}

variable "global_role_lambda_exec" {}
variable "global_dynamo_table" {}

locals {
  global_bucket_frontend = "tiki-${lower(var.global_tag_service)}-frontend-${lower(var.global_tag_environment)}"
  global_bucket_backend  = "tiki-${lower(var.global_tag_service)}-backend-${lower(var.global_tag_environment)}"

  global_functions_version_path = "${path.module}/dependencies/functions.version"
  global_functions_version      = file(local.global_functions_version_path)
  global_functions_version_pipe = replace(local.global_functions_version, ".", "-")
  global_functions_src_path     = "${path.module}/dependencies/src.zip"

  global_api_version_path = "${path.module}/dependencies/api.version"
  global_api_version      = file(local.global_api_version_path)
  global_api_version_pipe = replace(local.global_api_version, ".", "-")
  global_api_domain_name  = "signup.${var.global_website_domain}"

  global_oas_path = "${path.module}/dependencies/oas.json"
  global_oas_file = templatefile(local.global_oas_path, {
    signup_user_post_arn = aws_lambda_function.signup_user_post.invoke_arn,
    signup_user_get_arn  = aws_lambda_function.signup_user_get.invoke_arn,
    servers_url          = "signup.${var.global_website_domain}",
    region               = var.aws_region,
    version_pipe         = local.global_api_version_pipe
  })
}
