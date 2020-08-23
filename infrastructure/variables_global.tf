variable "global_log_bucket" { }

locals {
  global_tag_environment    = "Production"
  global_tag_service        = "website"
  global_website_domain     = "mytiki.com"
}
