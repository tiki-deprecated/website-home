variable "global_website_zone" {} //i.e. mytiki.com
variable "global_website_domain" {} //i.e. dev.mytiki.com

variable "global_tag_environment" {} //i.e. Production
variable "global_tag_service" {} //i.e. Website

variable "global_bucket_logs" {} //i.e. tiki-website-logs

variable "global_sendgrid_api_key" { default = ""}

locals {
  global_bucket_frontend = "tiki-${lower(var.global_tag_service)}-frontend-${lower(var.global_tag_environment)}"
  global_bucket_backend  = "tiki-${lower(var.global_tag_service)}-backend-${lower(var.global_tag_environment)}"

  global_functions_version      = file("${path.module}/dependencies/functions.version")
  global_functions_version_pipe = replace(local.global_functions_version, ".", "-")

  global_api_version        = file("${path.module}/dependencies/api.version")
  global_api_version_pipe   = replace(local.global_api_version, ".", "-")

  /*global_functions_zip_path     = "${path.module}/files/functions.zip"

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
  )*/
}
