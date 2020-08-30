variable "global_log_bucket" {}
variable "global_dynamodb_table_name" {}
variable "global_bucket_prefix" {}

locals {
  global_tag_environment = "Production"
  global_tag_service     = "Website"
  global_website_domain  = "mytiki.com"

  global_bucket_frontend = "${var.global_bucket_prefix}-frontend-${lower(local.global_tag_environment)}"
  global_bucket_backend  = "${var.global_bucket_prefix}-backend-${lower(local.global_tag_environment)}"

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
      lambda_arn   = aws_lambda_function.signup.invoke_arn,
      env          = lower(local.global_tag_environment),
      servers_url  = var.aws_api_gateway_servers_url,
      region       = var.aws_region,
      version      = local.global_api_version,
      version_pipe = local.global_api_version_pipe
    }
  )
}
