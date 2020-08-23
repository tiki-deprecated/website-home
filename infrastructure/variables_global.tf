variable "global_log_bucket" { }

locals {
  global_tag_environment    = "Test"
  global_tag_service        = "website"
  global_website_domain     = "test.mytiki.com"
}
