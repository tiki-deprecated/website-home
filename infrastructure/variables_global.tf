variable "global_log_bucket" {}
variable "global_dynamodb_table_name" {}
variable "global_bucket_prefix" {}

locals {
  global_tag_environment = "Production"
  global_tag_service     = "Website"
  global_website_domain  = "mytiki.com"
  global_bucket_frontend = "${var.global_bucket_prefix}-frontend-${lower(local.global_tag_environment)}"
  global_bucket_backend  = "${var.global_bucket_prefix}-backend-${lower(local.global_tag_environment)}"
}
