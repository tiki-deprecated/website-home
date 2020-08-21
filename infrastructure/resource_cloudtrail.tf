variable "aws_cloudtrail_log_bucket" { }

resource "aws_cloudtrail" "s3_object_log" {
  name                          = "ct-s3-${var.aws_s3_bucket}"
  s3_bucket_name                = var.aws_cloudtrail_log_bucket
  include_global_service_events = false

  tags = {
    Environment = var.global_tag_environment
    Service     = var.global_tag_service
  }

  event_selector {
    read_write_type           = "WriteOnly"
    include_management_events = false

    data_resource {
      type = "AWS::S3::Object"
      values = ["${data.aws_s3_bucket.static-site.arn}/"]
    }
  }
}
