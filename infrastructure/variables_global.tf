variable "global_log_bucket" {}
variable "global_dynamodb_table_name" {}
variable "global_bucket_prefix" {}

locals {
  global_tag_environment = "Production"
  global_tag_service     = "Website"
  global_website_domain  = "mytiki.com"

  global_bucket_frontend = "${var.global_bucket_prefix}-frontend-${lower(local.global_tag_environment)}"
  global_bucket_backend  = "${var.global_bucket_prefix}-backend-${lower(local.global_tag_environment)}"

  global_functions_version      = replace(file(local.global_functions_version_path), ".", "-")
  global_functions_version_path = "${path.module}/files/functions.version"
  global_functions_zip_path     = "${path.module}/files/functions.zip"
  global_api_version            = replace(file(local.global_api_version_path), ".", "-")
  global_api_version_path       = "${path.module}/files/api.version"
  global_api_path               = "${path.module}/files/oas.json"
  global_frontend_dist_path     = "${path.module}/files/dist/"
}
